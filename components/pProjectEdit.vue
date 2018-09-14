<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    :title="editType === PROJECT.ADD ? '添加项目' : '编辑项目'" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog"
    >
    <mu-form 
      ref="form" 
      :model="project">
      <mu-form-item
        v-show="editType === PROJECT.EDIT" 
        label="项目ID(用于同步项目数据的唯一标识)" 
        prop="projectName"
        :rules="requiredRule">
        <mu-text-field 
          disabled
          v-model="project.projectId"
          :max-length="32">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="项目名称(必填)" 
        prop="projectName"
        :rules="requiredRule">
        <mu-text-field 
          v-model="project.projectName"
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
          v-model="project.projectUrl" 
          :max-length="128"
          placeholder="项目的托管地址">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item label="项目成员" prop="desc">
        <mu-select
          :max-height="200"
          filterable 
          multiple 
          chips 
          v-model="project.projectMember" 
          @click.native="searchUsers"
          full-width>
          <template slot="selection" slot-scope="scope">
            <mu-chip color="teal">
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
              <mu-avatar :size="36" color="teal">
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
          v-model="project.projectDesc" 
          multi-line 
          :max-length="120"
          :rows="1" 
          :rows-max="2"></mu-text-field>
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
import { PROJECT }  from '~/constant/project'
import { Project, User, Res } from '~/common/types'
import graphql from '~/graphql'
import { spellFormat } from '~/utils'
import { COMMON_CODE }  from '~/common/constants'

@Component
export default class PProjectEdit extends Vue {
  readonly PROJECT = PROJECT
  readonly spell =  spellFormat

  visible: boolean = false
  editType: number = PROJECT.ADD

  projectUrlErrText: string = ''
  project: Project = { // 项目信息
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

  @Watch('show')
  onShowChanged(val: boolean) {
    this.visible = val
    this.editType = this.type

    console.log(this.type)

    if(this.type === PROJECT.ADD) {
      this.project = {
        projectName : '',
        projectId: '',
        projectUrl: '',
        projectDesc: '',
        projectMember: []
      }
    } else {
      this.users = []
      this.searchUsers(() => {
        let { project } = this
        this.project = this.data
        let projectMember = this.data.projectMember
        if(!projectMember || !projectMember.length) return
        let users: User[] = []
        // 获取当前项目成员
        for(let member of projectMember) {
          let find = this.users.find(user => user.userId === member.userId)
          if(find) users.push(find)
        }
        this.project.projectMember = users
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
      this.users = <User[]>res.data
      cb && cb()
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 20:44:53  
   * @Desc:   更新项目 
   * @Parm:    
   */  
  updateProject() {
    this.projectUrlErrText = ''
    this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
      const { project } = this
      let { editType } = this

      graphql(editType === PROJECT.ADD ? 'project-add' : 'project-update', {
        ...project,
        projectMember: JSON.stringify(project.projectMember)
      }, (res: Res) => {
        // 项目url重复
        if(res.code === COMMON_CODE.PROJECT_URL_REPEAT) {
          this.projectUrlErrText = res.msg
          return
        } 
        this.$emit('refresh', project)
        this.projectUrlErrText = ''
        this.$toast.success(res.msg)
      })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 20:39:42  
   * @Desc:   关闭对话框 
   * @Parm:    
   */  
  closeDialog() {
    this.visible = false
    this.$emit('update:show', false)
  }

}
</script>

