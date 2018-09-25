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
          align-items="center"
          v-if="!project.projectStatic.length">
          <img src="~assets/img/default/default.jpg" alt="">
          <div>啊哈，么有数据！</div>
        </div>
        <!-- 资源列表 -->
        <mu-row gutter>
          <mu-col 
            sm="12" 
            md="12" 
            lg="12" 
            xl="3"
            v-for="(item, index) in project.projectStatic" 
            :key="index">
            <mu-card class="page-card"  @click="enterStatic(item)">
              <mu-card-media 
                :title="item.staticName"
                :sub-title="item.staticDesc"
                :style="{backgroundImage: `url(/img/projects/${index}.jpg)`}">
              </mu-card-media>
              <mu-card-text>
                <mu-row>
                  <mu-col :span="8">
                    <div class="page-card-avatar">
                      <!-- <mu-badge 
                        :color="STATIC_VIEW[item.staticType].color" 
                        :content="STATIC_VIEW[item.staticType].label">
                      </mu-badge>
                      <mu-badge 
                        color="success" 
                        :content="item.staticVersion">
                      </mu-badge> -->
                      <mu-button  :color="STATIC_VIEW[item.staticType].color">
                        {{ STATIC_VIEW[item.staticType].label }}
                      </mu-button>
                      <mu-button class="page-card-version"  color="green300">
                        {{ item.staticVersion }}
                      </mu-button>
                    </div>
                  </mu-col>
                  <mu-col :span="4">
                    <mu-button small fab color="red" @click.stop="openDeleteDialog(index)">
                      <i class="fa fa-trash"></i>
                    </mu-button>
                    <mu-button small fab color="blue" @click.stop="openEditDialog(index)">
                      <i class="fa fa-pencil"></i>
                    </mu-button>
                  </mu-col>
                </mu-row>
              </mu-card-text>
            </mu-card>
          </mu-col>    
        </mu-row>  
      </div>
    </mu-card>

    <!-- 资源类型编辑 -->
    <p-static-edit
      :type="type"
      :show.sync="edit"
      :projectId="$route.params.projectId"
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
  readonly title: string = "项目资源类型管理"
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

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染项目列表 
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('project-queryById', params, async (res: Res) => {
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
  openDeleteDialog(index) {
    try {
      if(!this.project 
        || !this.project.projectStatic
        || !this.project.projectStatic.length) return
      this.del = true
      this.delName = ''
      this.currentStatic = JSON.parse(JSON.stringify(this.project.projectStatic[index]))
    } catch(err) {
      this.$toast.success(err.message)
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
  openEditDialog(index) {
    try {
      if(!this.project.projectStatic) return
      this.edit = true
      this.type = EDIT_TYPE.EDIT
      this.currentStatic = JSON.parse(JSON.stringify(this.project.projectStatic[index]))
    } catch(err) {
      console.error(err.message)
      this.$toast.success(err.message)
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
    graphql('project-queryById', { projectId: this.$route.params.projectId  },  (res: Res) => {
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
  enterStatic(sta: Static) {
    this.$router.push(`/project/static/${this.$route.params.projectId}-${sta.staticId}`)
  }
}
</script>



<style lang="less" scoped>

.page-card {
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
      .col-4 {
        height: 100%;
        .mu-button {
          float: right;
          margin-right: 8px;
        }
      }
      .page-card-avatar {
        height: 100%;
        overflow: auto;
      }
    }
  }

  .col-4 {
    .mu-button {
      opacity: 0;
    }
  }
  
  &:hover {
    .col-4 {
      .mu-button {
        opacity: 1;
        transition: all .5s cubic-bezier(.4,0,.2,1);
      }
    }
  }
}

.page-card-version {
  margin-left: -4px;
  box-shadow: none;
}

</style>


