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
          <mu-button flat textColor="grey600" @click="openAddDialog">
            <mu-icon left value=" " class="fa fa-plus"></mu-icon>
            添加多语言
          </mu-button>
          <mu-button flat textColor="grey600" @click="openImportTranslateDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            导入全部多语言
          </mu-button>
          <mu-button flat textColor="grey600" @click="openExportDialog">
            <mu-icon left value=" " class="fa fa-download"></mu-icon>
            导出全部多语言
          </mu-button>
        </div>
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <!-- <div 
            class="page-body-default"
            align-items="center">
            <img src="~assets/img/default/default.jpg" alt="">
            <div>啊哈，么有数据！</div>
          </div> -->
          <mu-container>
            <mu-paper :z-depth="1">
              <mu-data-table 
                :height="710"
                :columns="i18nColumns" 
                :data="sta.staticData"
                fit>
                <template slot-scope="scope">
                  <td>{{ scope.row.i18nName }}</td>
                  <td>
                    <mu-badge 
                      :content="scope.row.i18nId" 
                      color="primary">
                    </mu-badge>
                  </td>
                  <td>{{ scope.row.i18nImportTime}}</td>
                  <td>{{ scope.row.i18nDesc }}</td>
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


    <!-- 添加多语言 -->
    <p-i18n-edit
      :show.sync="edit"
      :type="editType"
      :staticId="$route.params.id.split('-')[1]"
      :data="currentI18n"
      @refresh="refreshI18n">
    </p-i18n-edit>

    <!-- 导入多语言 -->
    <p-i18n-translate-upload
      :show.sync="uploadI18n"
      :staticId="$route.params.id.split('-')[1]"
      @refresh="refreshI18n">
    </p-i18n-translate-upload>

    <!-- 导出多语言 -->
    <p-i18n-export>
    </p-i18n-export>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import { EDIT_TYPE } from '~/constant/project'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import graphql from '~/graphql'
import { Res, I18n } from '~/common/types'
import pI18nTranslateUpload from '~/components/pI18nTranslateUpload.vue'
import pI18nExport from '~/components/pI18nExport.vue'
import pI18nEdit from '~/components/pI18nEdit.vue'


@Component({
  components: {
    pI18nTranslateUpload,
    pI18nExport,
    pI18nEdit
  }
})
export default class extends mixins(head, layout) {

  edit: boolean = false
  editType: number = EDIT_TYPE.ADD
  uploadI18n: boolean = false
  exportI18n: boolean = false

  currentI18n: I18n = { // 当前要编辑的资源类型
    i18nName: '',
    i18nId: '',
    i18nDesc: '',
    i18nImportTime: '',
    staticId: ''
  } 

  i18nColumns = [
    { title: '多语言名称', name: 'i18nName' },
    { title: '多语言ID', name: 'i18nId'},
    { title: '多语言最近导入时间', name: 'i18nImportTime'},
    { title: '多语言描述', name: 'i18nDesc'},
    { title: '操作'}
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染静态资源 
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('sta-queryById', params, async (res: Res) => {
      cb(null, {
        sta: res.data
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
   * @Date:   2018-09-26 17:53:30  
   * @Desc:   添加多语言 
   * @Parm:    
   */  
  openAddDialog() {
    this.edit = true
    this.editType = EDIT_TYPE.ADD
  } 

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 20:57:19  
   * @Desc:   编辑多语言 
   * @Parm:    
   */  
  openEditDialog(row) {
    this.edit = true
    this.editType = EDIT_TYPE.EDIT
    this.currentI18n = JSON.parse(JSON.stringify(row))
  }


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-21 16:39:36  
   * @Desc:   导入翻译多语言 
   * @Parm:    
   */  
  openImportTranslateDialog() {
    this.uploadI18n = true
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 14:38:35  
   * @Desc:    
   * @Parm:    
   */  
  openExportDialog() {
    this.exportI18n = true
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 09:46:14  
   * @Desc:   刷新多语言列表 
   * @Parm:    
   */  
  refreshI18n() {
    this.edit = false
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

