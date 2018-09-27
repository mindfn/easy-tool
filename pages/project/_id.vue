<template>
  <div class="page-container">
    <mu-card>
      <!-- 卡片头部 -->
      <mu-row>
        <!-- 描述 -->
        <mu-col :span="8">
          <mu-card-header 
            :title="project.projectName" 
            :sub-title="project.projectDesc">
            <mu-avatar slot="avatar" @click="leaveProject">
              <i class="fa fa-arrow-left"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 编辑 -->
        <mu-col :span="4">
          <!-- <mu-button 
            fab 
            small 
            color="blue"
            @click="openAddDialog">
            <i class="fa fa-plus"></i>
          </mu-button> -->
        </mu-col>
      </mu-row>  

      <!-- 卡片主体 -->
      <div class="page-body">
        <!-- 操作栏 -->
        <div class="page-body-toolbar">
          <mu-button flat textColor="grey600" @click="openAddDialog">
            <mu-icon left value=" " class="fa fa-plus"></mu-icon>
            添加资源
          </mu-button>
          <!-- <mu-button flat textColor="grey600">
            <mu-icon left value=" " class="fa fa-trash"></mu-icon>
            删除资源
          </mu-button> -->
        </div>
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <div class="page-body-default" 
            align-items="center"
            v-if="!project.projectStatic.length">
            <img src="~assets/img/default/default.jpg" alt="">
            <div>啊哈，么有数据！</div>
          </div>
          <!-- 资源列表 --> 
          <mu-container v-else>
            <mu-paper :z-depth="1">
              <mu-data-table 
                :height="710"
                fit
                :columns="staticColumns" 
                :data="project.projectStatic"
                @row-click="enterStatic">
                <template slot-scope="scope">
                  <td>{{scope.row.staticName}}</td>
                  <td>
                    <mu-badge :content="scope.row.staticVersion"></mu-badge>
                  </td>
                  <td>
                    <mu-badge 
                    :content="STATIC_VIEW[scope.row.staticType].label" 
                    :color="STATIC_VIEW[scope.row.staticType].color"></mu-badge>
                  </td>
                  <td>{{scope.row.staticDesc}}</td>
                  <td class="page-list-edit">
                    <mu-button flat small color="primary" @click.stop="openEditDialog(scope.row)">
                      编辑
                    </mu-button>
                    <mu-button flat small color="red" @click.stop="openDeleteDialog(scope.row)">
                      删除
                    </mu-button>
                  </td>
                </template>
              </mu-data-table>
            </mu-paper>
          </mu-container>
        </div> 
      </div>
    </mu-card>

    <!-- 资源类型编辑 -->
    <p-static-edit
      :type="type"
      :show.sync="edit"
      :projectId="$route.params.id"
      :data="currentStatic"
      @refresh="refreshStatics">
    </p-static-edit>

    <!-- 静态资源删除 -->
    <mu-dialog 
      class="page-dialog-del"
      title="删除资源确认" 
      width="360" 
      :open.sync="del">
      <p>如果您继续删除，必须知道此操作无法撤消，这将永久删除<strong>{{ currentStatic.staticName }}</strong>！</p>
      <p>请输入资源名称以进行确认。</p>
      <mu-text-field 
        v-model="delName" 
        placeholder="请输入资源名称">
      </mu-text-field>
      <mu-button 
        slot="actions" 
        flat 
        @click="del = false">
        关闭
      </mu-button>
      <mu-button 
        :disabled="delName !== currentStatic.staticName"
        slot="actions" 
        flat 
        color="primary" 
        @click="delProject">
        确认
      </mu-button>
    </mu-dialog>
  </div>
</template>


<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import { Res, Project, Static } from '~/common/types'
import graphql from '~/graphql'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import pStaticEdit from '~/components/pStaticEdit.vue'
import { EDIT_TYPE } from '~/constant/project'
import { STATIC_VIEW } from '~/common/constants'

@Component({
  components: {
    pStaticEdit
  }
})
export default class extends mixins(head, layout) {
  readonly title: string = "项目资源管理"
  readonly STATIC_VIEW = STATIC_VIEW

  edit: boolean = false
  del: boolean = false
  type:number = EDIT_TYPE.ADD // 资源编辑类型

  delName: string = ''

  project: Project = { // 当前项目信息
    projectId: '',
    projectName: '',
    projectDesc: '',
    projectStatic: []
  }

  currentStatic: Static = { // 当前要编辑的资源类型
    staticVersion: '',
    staticId: '',
    staticName: '',
    staticType: 0,
    staticDesc: ''
  } 

  staticColumns = [
    { title: '资源名称', name: 'staticName' },
    { title: '资源版本', name: 'staticVersion'},
    { title: '资源类型', name: 'staticType'},
    { title: '资源描述', name: 'staticDesc'},
    { title: '操作'}
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染资源列表
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('project-queryById', { projectId: params.id }, async (res: Res) => {
      cb(null, {
        project: <Project>res.data
      })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 15:05:34  
   * @Desc:   打开添加静态资源对话框 
   * @Parm:    
   */  
  openAddDialog() {
    this.edit = true
    this.type = EDIT_TYPE.ADD
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:06:49  
   * @Desc:   打开删除静态资源对话框 
   * @Parm:    
   */  
  openDeleteDialog(row) {
    try {
      if(!this.project 
        || !this.project.projectStatic
        || !this.project.projectStatic.length) return
      this.del = true
      this.delName = ''
      this.currentStatic = JSON.parse(JSON.stringify(row))
    } catch(err) {
      console.error(err.message)
      // this.$toast.error(err.message)
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:10:17  
   * @Desc:   删除资源 
   * @Parm:    
   */  
  delProject() {
    graphql('sta-delete', { 
      projectId: this.project.projectId, 
      staticId: this.currentStatic.staticId 
    }, (res: Res) => {
      this.del = false
      this.$toast.success(res.msg)
      this.refreshStatics()
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:12:05  
   * @Desc:   打开编辑资源对话框 
   * @Parm:    
   */  
  openEditDialog(row) {
    try {
      if(!this.project.projectStatic) return
      this.edit = true
      this.type = EDIT_TYPE.EDIT
      this.currentStatic = JSON.parse(JSON.stringify(row))
    } catch(err) {
      console.error(err.message)
      // this.$toast.error(err.message)
    }
   
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-15 09:45:25  
   * @Desc:   刷新静态资源类型 
   * @Parm:    
   */  
  refreshStatics() {
    this.edit = false
    graphql('project-queryById', { projectId: this.$route.params.id  },  (res: Res) => {
      this.project = <Project>res.data
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 10:14:45  
   * @Desc:   离开当前项目的资源管理
   * @Parm:    
   */  
  leaveProject() {
    this.$router.push('/project')
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 13:49:59  
   * @Desc:   进入资源类型管理 
   * @Parm:    
   */  
  enterStatic(index: number, sta: Static) {
    this.$router.push(`/project/static/i18ns/${this.$route.params.id}-${sta.staticId}`)
  }
}
</script>


<style lang="less" scoped>

.page-container {
  .page-body {
    width: 100%;
    overflow: hidden;
    padding: 0;
    height: calc(100% - 81px);
  }
}

.page-body-toolbar {
  height: 60px;
  padding: 0 32px 0 8px;
  line-height: 60px;
  border-bottom:  1px solid rgba(0, 0, 0, .1);
  background-color: #f5f5f5;
  .mu-button {
    margin-left: 8px;
  }
}


.page-body-table {
  overflow-y: hidden;
  overflow-x: auto;
  max-width: 99%;
  margin: 0 auto;
  height: calc(100% - 65px);

  .container {
    max-width: 2000px;
    padding: 0;
  }
}

</style>


