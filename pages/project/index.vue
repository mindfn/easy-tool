<template>
  <div class="page-container">
    <mu-card>
      <!-- 卡片头部 -->
      <mu-row>
        <!-- 描述 -->
        <mu-col :span="8">
          <mu-card-header 
            title="项目管理" 
            sub-title="这里将展示您创建的或参与的所有项目。">
            <mu-avatar slot="avatar">
              <i class="fa fa-file-o"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 编辑 -->
        <mu-col :span="4">
          <mu-text-field 
            v-model="searchName"
            placeholder="搜索项目名称" 
            @input.native="searchProjects">
            <template slot="prepend">
              <i class="fa fa-search"></i>
            </template>
            <template slot="append" v-if="searchName">
              <i class="fa fa-close" @click="clearSearch"></i>
            </template>
          </mu-text-field>
          <mu-button 
            fab 
            small 
            color="blue"
            @click="openAddDialog">
            <i class="fa fa-plus"></i>
          </mu-button>
        </mu-col>
      </mu-row>    

      <!-- 卡片主体 -->
      <div class="page-body">
        <!-- 缺省列表 -->
        <div 
          class="page-body-default"
          v-if="!projects.length"
          align-items="center">
          <img src="~assets/img/default/default.jpg" alt="">
          <div>啊哈，么有数据！</div>
        </div>
        <!-- 项目列表 -->
        <mu-row gutter>
          <mu-col 
            sm="12" 
            md="12" 
            lg="12" 
            xl="3"
            v-for="(item, index) in projects" 
            :key="index">
            <mu-card class="page-project" @click="enterProject(item)">
              <mu-card-media 
                :title="item.projectName"
                :sub-title="item.projectDesc"
                :style="{backgroundImage: `url(/img/projects/${index}.jpg)`}">
              </mu-card-media>
              <mu-card-text>
                <mu-row>
                  <mu-col :span="8">
                    <div class="page-project-avatar">
                      <mu-tooltip 
                        :content="member.username"
                        v-for="(member, index) in item.projectMember" :key="index">
                        <mu-avatar color="teal">
                          {{ spell(member.username) }}
                        </mu-avatar>
                      </mu-tooltip>
                    </div>
                  </mu-col>
                  <mu-col :span="4">
                    <mu-button small fab color="red" @click.stop="openDeleteDialog(index)">
                      <i class="fa fa fa-trash"></i>
                    </mu-button>
                    <mu-button small fab color="success" @click.stop="openEditDialog(index)">
                      <i class="fa fa fa-pencil"></i>
                    </mu-button>
                  </mu-col>
                </mu-row>
              </mu-card-text>
            </mu-card>
          </mu-col>
        </mu-row>
      </div>
    </mu-card>

    <!-- 项目添加 -->
    <p-project-edit 
      :type="type" 
      :show.sync="edit" 
      :data="currentProject"
      @refresh="refreshProjects">
    </p-project-edit>

    <!-- 项目删除 -->
    <mu-dialog 
      class="page-dialog-del"
      title="删除项目确认" 
      width="360" 
      :open.sync="del">
      <p>如果您继续删除，必须知道此操作无法撤消，这将永久删除<strong>{{ currentProject.projectName }}</strong>！</p>
      <p>请输入项目名称以进行确认。</p>
      <mu-text-field 
        v-model="delName" 
        placeholder="请输入项目名称">
      </mu-text-field>
      <mu-button 
        slot="actions" 
        flat 
        @click="del = false">
        关闭
      </mu-button>
      <mu-button 
        :disabled="delName !== currentProject.projectName"
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
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import graphql from '~/graphql'
import { Res, Project } from '~/common/types'
import moment from 'moment'
import pProjectEdit from '~/components/pProjectEdit.vue'
import { PROJECT } from '~/constant/project'
import { spellFormat } from '~/utils'

@Component({
  components: {
    pProjectEdit
  }
})
export default class extends mixins(head, layout) {
  readonly title: string = "项目管理"
  readonly moment = moment
  readonly PROJECT = PROJECT
  readonly spell =  spellFormat

  del: boolean = false
  edit: boolean = false

  type:number = PROJECT.ADD // 项目编辑类型

  searchName: string = '' // 搜索名称
  delName: string = '' // 删除的项目名称
  projects: Project[] = [] // 项目列表数据
  currentProject: Project = { // 当前要删除的项目
    projectName : '',
    projectUrl: '',
    projectDesc: '',
    projectMember: []
  } 

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染项目列表 
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('project-getList', async (res: Res) => {
      cb(null, {
        projects: <Project[]>res.data
      })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-12 16:54:31  
   * @Desc:   设置项目背景图 
   * @Parm:    
   */  
  setProjectBgImg(index: number) {
    return `/img/projects/${index}.png`
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-10 15:47:55  
   * @Desc:   搜索项目 
   * @Parm:    
   */  
  searchProjects(): void {
    graphql('project-queryByName', { projectName: this.searchName  },  (res: Res) => {
       this.projects = <Project[]>res.data
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-13 17:17:35  
   * @Desc:   清除项目搜索 
   * @Parm:    
   */  
  clearSearch() : void {
    this.searchName = ''
    this.searchProjects()
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-06 20:01:04  
   * @Desc:   打开添加项目对话框
   * @Parm:    
   */  
  openAddDialog(): void {
    this.edit = true
    this.type = PROJECT.ADD
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-14 18:53:17  
   * @Desc:   打开编辑项目对话框 
   * @Parm:    
   */  
  openEditDialog(index: number): void {
    this.edit = true
    this.type = PROJECT.EDIT
    const project = this.projects[index]
    this.currentProject = {
      ...project,
      projectMember: JSON.parse(JSON.stringify(project.projectMember))
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-14 09:19:10  
   * @Desc:   刷新项目列表 
   * @Parm:    
   */  
  refreshProjects() {
    this.edit = false
    this.searchProjects()
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-06 19:40:25  
   * @Desc:   项目删除确认 
   * @Parm:   index: 需要删除的项目索引 
   */  
  openDeleteDialog(index: number): void {
    try {
      this.del = true
      this.delName = ''
      // 深拷贝
      this.currentProject = JSON.parse(JSON.stringify(this.projects[index]))
    } catch(err) {
      this.$toast.success(err.msg)
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-13 18:38:05  
   * @Desc:   项目删除 
   * @Parm:    
   */  
  delProject(): void{
    graphql('project-delete', this.currentProject.projectId, (res: Res) => {
      this.del = false
      this.$toast.success(res.msg)
      this.searchProjects()
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-12 20:29:22  
   * @Desc:   进入项目的资源管理
   * @Parm:    
   */  
  enterProject(project: Project) {
    this.$router.push(`/project/${project.projectId}`)
  }
}
</script>


<style lang="less" scoped>
.page-project {
  height: 300px;
  margin-bottom: 32px;
  border: 1px solid rgba(0, 0, 0, .12);
  cursor: pointer;
  &:hover {
    background-color: rgba(240, 240, 240, .4);
    .mu-card-media {
      transition: all .5s ease;
      background-size: 100% 100%;
    }
  }
  .mu-card-media {
    padding: 1px;
    height: 73%;
    opacity: .5;
    background-size: 60% 80%;
    transition: all .15s cubic-bezier(.4,0,.2,1);
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    .mu-card-media-title {
      height: 90px;
      background-color: black;
      opacity: .8;
      color: white;
      .mu-card-title, .mu-card-sub-title {
        overflow-x: scroll;
        white-space:nowrap;
        color: white;
      }
    }
  }
  .mu-card-text {
    height: 27%;
    .row {
      height: 100%;
      .mu-avatar {
        margin: 0 4px 6px 0;
        font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
      }
      .col {
        height: 100%;
        .mu-button {
          float: right;
          margin-right: 8px;
        }
      }
      .page-project-avatar {
        height: 100%;
        overflow: auto;
      }
    }
  }
  .mu-button {
    opacity: 0;
  }
  &:hover {
    .mu-button {
      opacity: 1;
      transition: all .5s cubic-bezier(.4,0,.2,1);
    }
  }
}

</style>


