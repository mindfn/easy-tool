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
          <mu-button flat textColor="grey600" @click="openImportDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            开发导入
          </mu-button>
          <mu-button flat textColor="grey600" @click="openImportTranslateDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            翻译导入
          </mu-button>
          <mu-button flat textColor="grey600">
            <mu-icon left value=" " class="fa fa-download"></mu-icon>
            导出多语言
          </mu-button>
          <!-- 列表统计 -->
          <div class="page-toolbar-right"> 
            <mu-badge :content="`共${i18nData.length}条`" color="secondary"></mu-badge>
          </div>
          <!-- 多语言分类 -->
          <div class="page-toolbar-right">  
            <mu-chip 
              :class="i18nType === STATIC_I18N_TYPE.ALL ? 'page-chip-selected' : ''" 
              @click="showI18nType(STATIC_I18N_TYPE.ALL)">
              所有多语言
            </mu-chip>
            <mu-chip 
              :class="i18nType === STATIC_I18N_TYPE.FRONT ? 'page-chip-selected' : ''"
              @click="showI18nType(STATIC_I18N_TYPE.FRONT)">
              前端多语言
            </mu-chip>
            <mu-chip 
              :class="i18nType === STATIC_I18N_TYPE.BACK ? 'page-chip-selected' : ''"
              @click="showI18nType(STATIC_I18N_TYPE.BACK)">
              后端多语言
            </mu-chip>
          </div>
        </div>
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <div 
            class="page-body-default"
            align-items="center"
            v-if="!i18nData.length">
            <img src="~assets/img/default/default.jpg" alt="">
            <div>啊哈，么有数据！</div>
          </div>
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
                </template>
              </mu-data-table>
            </mu-paper>
          </mu-container>
        </div>
      </div>
    </mu-card> 

    <!-- 导入开发多语言 -->
    <p-i18n-upload
      :show.sync="upload"
      :staticId="$route.params.id.split('-')[1]"
      @refresh="refreshI18n">
    </p-i18n-upload>

    <!-- 导入翻译多语言 -->
    <p-i18n-translate-upload
      :show.sync="uploadTranslate"
      :staticId="$route.params.id.split('-')[1]"
      @refresh="refreshI18n">
    </p-i18n-translate-upload>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import graphql from '~/graphql'
import { Res } from '~/common/types'
import {  STATIC_I18N_TABLE_COLUMNS, STATIC_I18N_TABLE_TITLES, STATIC_I18N_TYPE } from '~/common/constants'
import pI18nUpload from '~/components/pI18nUpload.vue'
import pI18nTranslateUpload from '~/components/pI18nTranslateUpload.vue'
import i18n from '~/server/express/controllers/i18n.controller';

@Component({
  components: {
    pI18nUpload,
    pI18nTranslateUpload
  }
})
export default class extends mixins(head, layout) {
  readonly STATIC_I18N_TYPE = STATIC_I18N_TYPE

  searchVisible: boolean = false
  upload: boolean = false
  uploadTranslate: boolean = false
  i18nType: number = STATIC_I18N_TYPE.ALL

  i18nData: any[] = [] // 全部多语言
  i18nBackEndData: any[] = [] // 前端多语言
  i18nFrontEndData: any[] = [] // 后端多语言

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

      if(i18nBackEndData && i18nBackEndData.length && !i18nFrontEndData)  {
        i18nData = i18nBackEndData
      } else if(i18nFrontEndData && i18nFrontEndData.length && !i18nBackEndData) {
        i18nData = i18nFrontEndData
      } else if(i18nFrontEndData && i18nBackEndData && i18nFrontEndData.length && i18nBackEndData.length) {
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
   * @Date:   2018-09-21 15:38:13  
   * @Desc:    
   * @Parm:    
   */  
  showI18nType(type: number) {
    this.i18nType = type
    switch(this.i18nType) {
      case STATIC_I18N_TYPE.ALL:
        this.i18nData = [
          ...this.i18nFrontEndData,
          ...this.i18nBackEndData
        ]
        break

      case STATIC_I18N_TYPE.FRONT:
        this.i18nData = this.i18nFrontEndData
        break  
      
      case STATIC_I18N_TYPE.BACK:
        this.i18nData = this.i18nBackEndData
        break

      default:
        break  
    }
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
   * @Date:   2018-09-21 16:39:36  
   * @Desc:   导入翻译多语言 
   * @Parm:    
   */  
  openImportTranslateDialog() {
    this.uploadTranslate = true
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
    .mu-chip.page-chip-selected {
      background-color: rgb(33, 150, 243);
      color: white;
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
  overflow-y: hidden;
  overflow-x: auto;
  max-width: 99%;
  margin: 0 auto;
  height: calc(100% - 60px);

  .container {
    max-width: 2000px;
    padding: 0;
  }

  .page-table-btn {
    min-width: 40px;
  }
}
</style>

