<template>
  <div class="page-home">
    <mu-card>
      <mu-row>
        <!-- 项目描述 -->
        <mu-col :span="8">
          <mu-card-header 
            title="项目管理" 
            sub-title="这里将展示您创建的或参与的所有项目。">
            <mu-avatar slot="avatar">
              <i class="fa fa-file-o"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 项目编辑 -->
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
      <div class="page-card-body">
        <!-- 暂无数据 -->
        <div 
          class="page-body-default"
          v-if="isQuery && !project.length"
          align-items="center">
          <img src="~assets/img/default/default.jpg" alt="">
          <div>啊哈，么有数据！</div>
        </div>
        <!-- 项目列表 -->
        <mu-row gutter>
          <mu-col 
            sm="12" 
            md="12" 
            lg="6" 
            xl="4"
            v-for="(item, index) in project" 
            :key="index">
            <mu-card class="page-project">
              <mu-row>
                <!-- 项目名称 -->
                <mu-col :span="10">
                  <mu-card-header :title="item.projectName" :sub-title="item.createTime">
                    <mu-avatar 
                      slot="avatar" 
                      color="blue" 
                      :size="24">
                      <i class="fa fa-codepen"></i>
                    </mu-avatar>
                  </mu-card-header>
                </mu-col>
                <!-- 项目编辑 -->
                <mu-col :span="2" class="page-project-edit">
                  <mu-button 
                    icon 
                    small 
                    color="grey400"
                    @click="openDeleteDialog(index)">
                    <i class="fa fa-trash"></i>
                  </mu-button>
                </mu-col>
              </mu-row>
              <!-- 项目描述 -->
              <mu-row class="page-project-desc">
                <mu-card-text class="page-desc-text">
                  {{ item.projectDesc }}
                </mu-card-text>  
              </mu-row>
              <!-- 项目成员 -->
              <mu-row class="page-project-desc">
                <mu-card-text>
                  <mu-badge
                    v-for="(person, index) in item.projectMember" 
                    :key="index" 
                    :content="person.username"></mu-badge>
                </mu-card-text>  
              </mu-row>
            </mu-card>
          </mu-col>
        </mu-row>
      </div>
    </mu-card>

    <!-- 项目添加 -->
    <mu-dialog 
      title="添加项目" 
      width="520" 
      :open.sync="add">
      <mu-form 
        ref="form" 
        :model="selectProject">
        <mu-form-item 
          label="项目名称(必填)" 
          prop="projectName"
          :rules="requiredRule">
          <mu-text-field 
            v-model="selectProject.projectName"
            :max-length="32">
          </mu-text-field>
        </mu-form-item>
        <mu-form-item 
          label="项目基础URL(必填)" 
          prop="projectUrl"
          :rules="requiredRule">
          <mu-text-field  
            v-model="selectProject.projectUrl" 
            :max-length="32"
            placeholder="用于同步静态资源的URL地址，例如/nba">
            <div slot="prepend">/&nbsp;</div>
          </mu-text-field>
        </mu-form-item>
        <mu-form-item label="项目成员" prop="desc">
          <mu-select 
            :max-height="200"
            filterable 
            multiple 
            chips 
            v-model="selectProject.projectMember" 
            @click.native="searchMembers"
            full-width>
            <mu-option 
              ripple
              avatar
              v-for="(member, index) in members" 
              :key="index" 
              :label="member.username" 
              :value="member.userId">
              <mu-list-item-action avatar>
                <mu-avatar :size="36" color="secondary">
                  {{member.username.substring(0, 1)}}
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>
                  {{ member.username }}
                </mu-list-item-title>
              </mu-list-item-content>
            </mu-option>
          </mu-select>
        </mu-form-item>
        <mu-form-item 
          label="项目描述" 
          prop="projectDesc">
          <mu-text-field  
            v-model="selectProject.projectDesc" 
            multi-line 
            :max-length="120"
            :rows="1" 
            :rows-max="2"></mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button 
        slot="actions" 
        flat 
        @click="add = false">关闭</mu-button>
      <mu-button 
        slot="actions" 
        flat 
        color="primary"
        @click="addProject">确认</mu-button>
    </mu-dialog>

    <!-- 项目删除确认 -->
    <mu-dialog 
      class="page-dialog-del"
      title="删除项目确认" 
      width="360" 
      :open.sync="del">
      <p>如果您继续删除，必须知道此操作无法撤消，这将永久删除<strong>{{ selectProject.projectName }}</strong>！</p>
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
        :disabled="delName !== selectProject.projectName"
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
import { Res, Project, Member } from '~/constant/interface'

@Component
export default class extends mixins(head, layout) {
  readonly title: string = "主页"
  del: boolean = false
  add: boolean = false
  modify: boolean = false
  isQuery: boolean = false // 页面是否已经请求数据
  searchName: string = '' // 搜索的项目名称
  delName: string = '' // 删除的项目名称
  project: Project[] = [] // 项目列表数据
  selectProject: Project = { // 选中要操作的项目
    projectName : '',
    projectDesc: '',
    projectUrl: '',
    projectMember: []
  }  
  members: Member[] = [] // 用户列表

  requiredRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'}
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-10 11:15:48  
   * @Desc:   查询项目列表 
   * @Parm:    
   */ 
  queryProjects(): void {
    graphql('project-getList', (res: Res) => {
      this.project = <Project[]>res.data
      this.isQuery = true
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-10 15:47:55  
   * @Desc:   搜索项目 
   * @Parm:    
   */  
  searchProjects(): void {
    graphql('project-query', { projectName: this.searchName  },  (res: Res) => {
       this.project = <Project[]>res.data
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
    this.add = true
    this.members = []
    Object.assign(this.selectProject, {
      projectName : '',
      projectDesc: '',
      projectUrl: '',
      projectMember: []
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-14 15:12:43  
   * @Desc:   获取人员信息 
   * @Parm:    
   */  
  searchMembers() : void {
    if(this.members.length) return
    graphql('user-query', (res: Res) => {
      this.members = <Member[]>res.data
    })
  }


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-14 16:26:17  
   * @Desc:   添加项目  
   * @Parm:    
   */  
  addProject(): void {
    this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
      graphql('project-add', this.selectProject, (res: Res) => {
        this.$toast.success(res.msg)
        this.add = false
        this.queryProjects()
      })
    })
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
      this.selectProject = JSON.parse(JSON.stringify(this.project[index]))
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
    graphql('project-delete', this.selectProject.projectId, (res: Res) => {
      this.del = false
      this.$toast.success(res.msg)
      this.searchProjects()
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-13 18:33:32  
   * @Desc:   获取项目列表信息 
   * @Parm:    
   */  
  created(): void {
    this.queryProjects()
  }
}
</script>


<style lang="less" scoped>
.page-home {
  height: calc(~"100% - 50px");
  padding: 0 12px 12px 12px;
  >.mu-card {
    height: 100%;

    .mu-card-header-title  {
      padding-right: 0;
    }

    >.row {
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      >.col-4 {
        line-height: 75px;
        text-align: right;
        padding-right: 64px;
        >.mu-input {
          width: 160px;
          margin-right: 32px;
          .fa-search {
            margin-right: 16px;
            color: rgb(189, 189, 189);
          }
          .fa-close {
            cursor: pointer;
            font-size: 18px;
            display: inline-block;
            width: 20px;
            height: 20px;
          }
        }
        >.mu-button {
          vertical-align: middle;
        }
      }
    }
  }
}

.page-card-body {
  padding: 28px 64px;
  height: calc(~"100% - 76px");
  overflow: auto;
}

.page-body-default {
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    display: block;
    margin-bottom: 32px;
  }
  div {
    color: rgba(0, 0, 0, .57);
  }
}

.page-project {
  margin-bottom: 16px;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, .12);

  &:hover {
    background-color: rgba(240, 240, 240, .4);
  }
  cursor: pointer;
  .mu-card-header {
    padding: 16px 16px 6px 16px;
  } 
  >.row:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
}

.page-project-edit {
  line-height: 46px;
  text-align: right;
  padding-right: 8px;
  .mu-button {
    vertical-align: middle;
    i {
      font-size: 20px;
    }
  }
}

.page-project-desc {
  padding: 6px 16px;
  .mu-card-text {
    overflow: auto;
    padding: 0;
    height: 28px;
    color: rgba(0, 0, 0, .57);
  }
  .page-desc-text {
    height: 22px;
  } 
}

.mu-badge-container {
  margin: 0 8px 8px 0;
}

.page-dialog-del {
  strong {
    color: #2196f3;
  }
}
</style>


