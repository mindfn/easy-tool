<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    :title="editType === EDIT_TYPE.ADD ? '添加项目' : '编辑项目'" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form 
      ref="form" 
      :model="projectData">
      <mu-form-item 
        label="项目名称(必填)" 
        prop="projectName"
        :rules="requiredRule">
        <mu-text-field 
          v-model="projectData.projectName"
          :max-length="32">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="项目URL(必填)" 
        prop="projectUrl"
        :error-text="projectUrlErrText"
        @click.native="projectUrlErrText = ''"
        :rules="requiredRule">
        <mu-text-field  
          v-model="projectData.projectUrl" 
          :max-length="128"
          placeholder="项目的托管地址">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="项目创建者" 
        v-show="editType === EDIT_TYPE.EDIT">
        <mu-text-field disabled>
          <template slot="prepend">
            <mu-chip color="pink300" class="page-text-chip">
              {{ projectData.projectCreator }}
            </mu-chip>
          </template>
        </mu-text-field>
      </mu-form-item>
      <mu-form-item label="项目成员">
        <mu-select
          filterable 
          multiple 
          chips 
          :disabled="user.userId !== projectData.projectCreatorId && editType === EDIT_TYPE.EDIT"
          v-model="projectData.projectMember" 
          @click.native="searchUsers"
          full-width>
          <template slot="selection" slot-scope="scope">
            <mu-chip color="teal300">
              {{ scope.label }}
            </mu-chip>
          </template>
          <mu-option 
            ripple
            avatar
            v-for="(user, index) in users" 
            :key="index" 
            :label="user.username" 
            :value="user">
            <mu-list-item-action avatar>
              <mu-avatar :size="36" color="teal300">
                {{ spell(user.username) }}
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>
                {{ user.username }}
              </mu-list-item-title>
            </mu-list-item-content>
          </mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item 
        label="项目描述(必填)" 
        prop="projectDesc"
        :rules="requiredRule">
        <mu-text-field  
          v-model="projectData.projectDesc" 
          multi-line 
          :max-length="120"
          :rows="1" 
          :rows-max="2">
        </mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-button 
      slot="actions" 
      flat 
      @click="closeDialog">关闭</mu-button>
    <mu-button 
      slot="actions" 
      flat 
      color="primary"
      @click="updateProject">确认</mu-button>
  </mu-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { EDIT_TYPE }  from '~/constant/project'
import { Project, User, Res } from '~/common/types'
import graphql from '~/graphql'
import { spellFormat } from '~/utils'
import { COMMON_CODE }  from '~/common/constants'

@Component
export default class PProjectEdit extends Vue {
  readonly EDIT_TYPE = EDIT_TYPE
  readonly spell =  spellFormat

  visible: boolean = false
  editType: number = EDIT_TYPE.ADD

  projectUrlErrText: string = ''
  projectData: Project = { // 项目信息
    projectName : '',
    projectId: '',
    projectUrl: '',
    projectDesc: '',
    projectMember: []
  }
  users: User[] = [] // 用户列表

  requiredRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'}
  ]

  @Prop()
  type!: number 

  @Prop()
  show!: boolean

  @Prop()
  data!: Project

  @Prop()
  user!: any

  @Watch('show')
  onShowChanged(val: boolean) : void {
    this.visible = val
    this.editType = this.type
    this.projectUrlErrText = ''

    if(this.type === EDIT_TYPE.ADD) {
      this.projectData = {
        projectName : '',
        projectId: '',
        projectUrl: '',
        projectDesc: '',
        projectMember: []
      }
    } else {
      this.users = []
      this.searchUsers(() => {
        let { projectData } = this
        let { data } = this
        this.projectData = data
        let { projectMember } = data
        if(!projectMember || !projectMember.length) return
        let users: User[] = []
        // 获取当前项目成员
        // 注意这里必须使用同样的数组引用，否则无法使多选的选项出现，和muse-ui的select组件相关
        // 注意避免使用filter，新数组无效
        for(let member of projectMember) {
          let find = this.users.find(user => user.userId === member.userId)
          if(find) users.push(find)
        }
        this.projectData.projectMember = users
      })
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-14 15:12:43  
   * @Desc:   搜索人员信息 
   * @Parm:    
   */  
  searchUsers(cb: Function) : void {
    if(this.users.length) return
    graphql('user-query', (res: Res) => {
      // 过滤创建者
      this.users = <User[]>res.data.filter(user => user.userId !== (
        this.editType === EDIT_TYPE.ADD
        // 添加时候项目成员过滤自己
        ? this.user.userId
        // 修改时项目成员过滤创建者
        : this.data.projectCreatorId
      ))
      cb && cb()
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 20:44:53  
   * @Desc:   更新项目 
   * @Parm:    
   */  
  updateProject() : void {
    try {
      this.projectUrlErrText = ''
      this.$refs.form['validate']().then((valid: boolean) => {
        if(!valid) return
        const { projectData } = this

        graphql(this.editType === EDIT_TYPE.ADD ? 'project-add' : 'project-update', {
          ...projectData,
          projectMember: JSON.stringify(projectData.projectMember)
        }, (res: Res) => {
          // 项目url重复
          if(res.code === COMMON_CODE.PROJECT_URL_REPEAT) {
            this.projectUrlErrText = res.msg
            return
          }
          this.$emit('refresh')
          this.$toast.success(res.msg)
        })
      })
    } catch(err) {
      console.error(err.message)
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 20:39:42  
   * @Desc:   关闭对话框 
   * @Parm:    
   */  
  closeDialog() : void {
    this.visible = false
    this.$emit('update:show', false)
  }
}
</script>

<style lang="less" scoped> 
.page-text-chip {
  margin: 4px 4px 4px 0;
}
</style>

