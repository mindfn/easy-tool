<template>
  <div class="page-container">
    <mu-card>
      <!-- 卡片头部 -->
      <mu-row>
        <!-- 描述 -->
        <mu-col :span="8">
          <mu-card-header 
            :title="sta.staticName" 
            :sub-title="sta.staticDesc">
            <mu-avatar slot="avatar" @click="leaveStatic">
              <i class="fa fa-arrow-left"></i>
            </mu-avatar>
          </mu-card-header>
        </mu-col>
        <!-- 编辑 -->
        <mu-col :span="4">
        </mu-col>
      </mu-row>   
       <!-- 卡片主体 -->
      <div class="page-body">

        <!-- 操作栏 -->
        <div class="page-body-toolbar">
          <!-- <mu-button flat textColor="grey600">
            <mu-icon left value=" " class="fa fa-plus"></mu-icon>
            添加
          </mu-button>
          <mu-button flat textColor="grey600">
            <mu-icon left value=" " class="fa fa-trash"></mu-icon>
            批量删除
          </mu-button> -->
          <mu-button flat textColor="grey600" @click="openImportDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            导入
          </mu-button>
          <mu-button flat textColor="grey600">
            <mu-icon left value=" " class="fa fa-download"></mu-icon>
            导出
          </mu-button>
          <!-- 搜索展开和收起 -->
          <!-- <div class="page-toolbar-right">
            <mu-button 
              fab 
              small 
              color="blue"
              @click="toggleSearchVisible">
              <i class="fa fa-filter"></i>
            </mu-button>
          </div> -->

          <!-- 搜索关键信息 -->
          <!-- <div class="page-toolbar-right">
            <mu-text-field 
              v-model="searchKey"
              placeholder="搜索多语言" 
              @input.native="searchKeys">
              <template slot="prepend">
                <i class="fa fa-search page-toolbar-search"></i>
              </template>
              <template slot="append" v-if="searchKey">
                <i class="fa fa-close" @click="clearSearch"></i>
              </template>
            </mu-text-field>
          </div> -->
          <!-- 版本查询 -->
          <div class="page-toolbar-right">  
            <mu-chip class="demo-chip">
              所有多语言
            </mu-chip>
            <mu-chip class="demo-chip">
              前端多语言
            </mu-chip>
            <mu-chip class="demo-chip">
              后端多语言
            </mu-chip>
          </div>
        </div>

        <!-- 搜索栏 -->
        <!-- <mu-expand-transition>
          <div v-show="searchVisible" class="page-body-search">
            <mu-row>
              <mu-form inline label-position="left" :model="i18nSearch">
                <mu-col :span="3">
                  <mu-form-item prop="input" label="关键信息">
                    <mu-text-field  v-model="i18nSearch.key"></mu-text-field>
                  </mu-form-item>
                </mu-col>
                <mu-col :span="3">
                  <mu-form-item prop="input" label="上传起始时间">
                    <mu-date-input v-model="i18nSearch.createdTime" ></mu-date-input>
                  </mu-form-item>
                </mu-col>
                <mu-col :span="3">
                  <mu-form-item prop="input" label="同步起始时间">
                    <mu-date-input v-model="i18nSearch.updateTime"></mu-date-input>
                  </mu-form-item>
                </mu-col>
                <mu-col :span="3">
                  <mu-form-item prop="input" label="">
                    <mu-button color="blue">
                      查询
                    </mu-button>
                    <mu-button>
                      重置
                    </mu-button>
                  </mu-form-item>
                </mu-col>
              </mu-form>
            </mu-row>
          </div>
        </mu-expand-transition> -->
 
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <!-- <div 
            class="page-body-default"
            align-items="center"
            v-if="!i18nData.length">
            <img src="~assets/img/default/default.jpg" alt="">
            <div>啊哈，么有数据！</div>
          </div> -->
          <mu-container>
            <mu-paper :z-depth="1">
              <mu-data-table 
                :height="714"
                fit
                :columns="i18nColumns" 
                :data="i18nData">
                <template slot-scope="scope">
                  <td>{{scope.row.key}}</td>
                  <td>{{ sta.staticVersion }}</td>
                  <td>{{scope.row.chinese}}</td>
                  <td>{{scope.row.english}}</td>
                  <!-- <td>
                    <mu-button 
                      flat
                      small 
                      type="text"
                      color="blue300"
                      class="page-table-btn">
                      编辑
                    </mu-button>
                    <mu-button 
                      flat
                      small 
                      color="red300"
                      class="page-table-btn">
                      删除
                    </mu-button>  
                  </td> -->
                </template>
              </mu-data-table>
            </mu-paper>
          </mu-container>
        </div>
      </div>
    </mu-card> 

    <!-- 导入多语言 -->
    <p-i18n-upload
      :show.sync="upload"
      :staticId="$route.params.id.split('-')[1]"
      @refresh="refreshI18n">
    </p-i18n-upload>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import graphql from '~/graphql'
import { Res } from '~/common/types'
import {  STATIC_I18N_TABLE_COLUMNS, STATIC_I18N_TABLE_TITLES } from '~/common/constants'
import pI18nUpload from '~/components/pI18nUpload.vue'
import i18n from '~/server/express/controllers/i18n.controller';

@Component({
  components: {
    pI18nUpload
  }
})
export default class extends mixins(head, layout) {
  searchVisible: boolean = false
  upload: boolean = false
  i18nData = [] // 全部多语言
  i18nBackEndData = [] // 前端多语言
  i18nFrontEndData = [] // 后端多语言

  i18nColumns = [
    { title: '关键信息', name: 'key' },
    { title: '版本', name: 'version'},
    { title: '中文', name: 'chinese'},
    { title: '英文', name: 'english'}
  ]
  
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染静态资源 
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('sta-queryById', params, async (res: Res) => {

      let staticData = JSON.parse(res.data.staticData)
      let i18nBackEndData = []
      let i18nFrontEndData = []
      let i18nData = []

      if(staticData) {
        i18nBackEndData = staticData.i18nBackEndData && JSON.parse(staticData.i18nBackEndData)
        i18nFrontEndData = staticData.i18nFrontEndData && JSON.parse(staticData.i18nFrontEndData)
      }

      if(i18nBackEndData.length && !i18nFrontEndData)  {
        i18nData = i18nBackEndData
      } else if(i18nFrontEndData.length && !i18nBackEndData) {
        i18nData = i18nFrontEndData
      } else if(i18nFrontEndData.length && i18nBackEndData.length) {
        // 前后端多语言合并，默认前端覆盖后端重复key值的多语言
        i18nData = [
          ...i18nFrontEndData,
          ...i18nBackEndData
        ]
      }
      
      cb(null, {
        sta: {
          ...res.data,
          staticData: undefined
        },
        i18nData,
        i18nFrontEndData,
        i18nBackEndData
      })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 15:55:09  
   * @Desc:   离开当前资源管理的资源列表
   * @Parm:    
   */  
  leaveStatic() {
    this.$router.push(`/project/${this.$route.params.id.split('-')[0]}`)
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-18 16:17:12  
   * @Desc:   显示或隐藏搜索栏 
   * @Parm:    
   */  
  toggleSearchVisible() {
    this.searchVisible = !this.searchVisible
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-18 20:53:07  
   * @Desc:   导入多语言 
   * @Parm:    
   */  
  openImportDialog() {
    this.upload = true
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 09:46:14  
   * @Desc:   刷新多语言列表 
   * @Parm:    
   */  
  refreshI18n() {

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
  .page-toolbar-right {
    float: right;
    padding: 0 12px;
    line-height: 60px;
    .mu-chip {
      margin-right: 8px;
      text-align: center;
      min-width: 80px;
    }

    .mu-input  {
      margin-bottom: 0;
    }
    .page-toolbar-search {
      margin-right: 16px;
    }
  }
}


.page-body-search {
  border-bottom:  1px solid rgba(0, 0, 0, .2);
  .row {
    padding: 20px 32px 0;
  }
}

.page-body-table {
  overflow: auto;
  max-width: 99%;
  margin: 0 auto;
  height: calc(100% - 60px);

  .page-table-btn {
    min-width: 40px;
  }
}

.container {
  max-width: 2000px;
  padding: 0;
}
</style>

