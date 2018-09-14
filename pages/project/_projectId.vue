<template>
  <div class="page-container">
    <mu-card>
      <!-- 卡片头部 -->
      <mu-row>
        <!-- 描述 -->
        <mu-col :span="8">
          <mu-card-header 
            :title="`${project.projectName} (${project.projectDesc})`" 
            :sub-title="`ID: ${project.projectId}`">
            <mu-avatar slot="avatar" @click="leaveProject">
              <i class="fa fa-arrow-left"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 编辑 -->
        <mu-col :span="4">
          <mu-text-field 
            placeholder="搜索资源名称">
            <template slot="prepend">
              <i class="fa fa-search"></i>
            </template>
            <template slot="append">
              <i class="fa fa-close"></i>
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
          align-items="center">
          <img src="~assets/img/default/default.jpg" alt="">
          <div>啊哈，么有数据！</div>
        </div>
        <!-- 资源列表 -->
      </div>
    </mu-card>
  </div>
</template>


<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import { Res, Project } from '~/common/types'
import graphql from '~/graphql'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import pStaticEdit from '~/components/pStaticEdit.vue'
import { STATIC } from '~/constant/project'

@Component({
  components: {
    pStaticEdit
  }
})
export default class extends mixins(head, layout) {
  readonly title: string = "项目资源管理"
  readonly STATIC = STATIC

  edit: boolean = false

  // static: Project = {
  //   projectId: '',
  //   projectName : '',
  //   projectUrl: '',
  //   projectDesc: '',
  //   projectMember: []
  // }

  // currentStatic: Project = { // 当前要编辑的资源类型
  //   projectId: '',
  //   projectName : '',
  //   projectUrl: '',
  //   projectDesc: '',
  //   projectMember: []
  // } 

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
   * @Date:   2018-09-13 10:14:45  
   * @Desc:   离开当前项目的资源管理
   * @Parm:    
   */  
  leaveProject() {
    this.$router.push('/project')
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 15:05:34  
   * @Desc:   打开添加静态资源对话框 
   * @Parm:    
   */  
  openAddDialog() {
    this.edit = true
  }
}
</script>


<style lang="less" scoped>

.page-container {
  .mu-avatar {
    &:hover {
      transition: all .3s cubic-bezier(.4,0,.2,1);
      cursor: pointer;
      background: rgb(33, 150, 243);
    }
  }

  .mu-card-header-title {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    .mu-card-title {
      font-weight: bold;
    }
  }
}


</style>


