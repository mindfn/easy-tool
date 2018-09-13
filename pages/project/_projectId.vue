<template>
  <div class="page-container">
     <mu-card>
      <mu-row>
        <!-- 项目描述 -->
        <mu-col :span="8">
          <mu-card-header 
            :title="project.projectName" 
            :sub-title="`项目ID: ${project.projectId}`">
            <mu-avatar slot="avatar" @click="leaveProject">
              <i class="fa fa-arrow-left"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 项目编辑 -->
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
            @click="openEditDialog">
            <i class="fa fa-pencil"></i>
          </mu-button>
        </mu-col>
      </mu-row>    
      <div class="page-body">
        <!-- 暂无数据 -->
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
import { Res, Project, User } from '~/common/types'
import graphql from '~/graphql'
import head from '~/mixins/head'
import layout from '~/mixins/layout'

@Component
export default class extends mixins(head, layout) {
  readonly title: string = "项目资源管理"
  edit: boolean = false

  project: Project = { // 项目信息
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
   * @Desc:   打开项目编辑对话框 
   * @Parm:    
   */  
  openEditDialog() {
    this.edit = true
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 15:16:25  
   * @Desc:   编辑项目 
   * @Parm:    
   */  
  editProject() {

  }
}
</script>


<style lang="less" scoped>

.page-container {
  .mu-avatar {
    &:hover {
      cursor: pointer;
      background: rgb(33, 150, 243);
    }
  }
}


</style>


