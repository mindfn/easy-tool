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
          <mu-button 
            :disabled="disabled"
            flat 
            textColor="grey600" 
            @click="openImportDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            导入多语言
          </mu-button>
          <mu-button 
            :disabled="disabled"
            flat 
            textColor="grey600">
            <mu-icon left value=" " class="fa fa-download"></mu-icon>
            导出多语言
          </mu-button>
          <mu-button 
            flat 
            textColor="grey600">
            <mu-icon left value=" " class="fa fa-link"></mu-icon>
            下载模板
          </mu-button>
        </div>
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <div 
            v-if="!sta.staticData.length"
            class="page-body-default"
            align-items="center">
            <img src="~assets/img/default/default.jpg" alt="">
            <div>啊哈，么有数据！</div>
          </div>
          <mu-container v-else>
            <mu-paper :z-depth="1">
              <mu-data-table 
                :height="710"
                :columns="i18nColumns" 
                :data="sta.staticData"
                @row-click="enterI18n"
                fit>
                <template slot-scope="scope">
                  <td>{{ scope.row.i18nName }}</td>
                  <td>
                    <mu-badge 
                      :content="scope.row.i18nId" 
                      color="primary">
                    </mu-badge>
                  </td>
                  <td>
                    <mu-badge :content="sta.staticVersion"></mu-badge>
                  </td>
                  <td>{{ scope.row.i18nImportFileName}}</td>
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


    <!-- 多语言添加 -->
    <p-i18n-edit
      :show.sync="edit"
      :type="editType"
      :staticId="$route.params.id.split('-')[1]"
      :data="currentI18n"
      @refresh="refreshI18n">
    </p-i18n-edit>

    <!-- 多语言删除 -->
    <mu-dialog 
      class="page-dialog-del"
      title="删除多语言确认" 
      width="360" 
      :open.sync="del">
      <p>如果您继续删除，必须知道此操作无法撤消，这将永久删除<strong>{{ currentI18n.i18nName }}</strong>！</p>
      <p>请输入多语言名称以进行确认。</p>
      <mu-text-field 
        v-model="delName" 
        placeholder="请输入多语言名称">
      </mu-text-field>
      <mu-button 
        slot="actions" 
        flat 
        @click="del = false">
        关闭
      </mu-button>
      <mu-button 
        :disabled="delName !== currentI18n.i18nName"
        slot="actions" 
        flat 
        color="primary" 
        @click="delI18n">
        确认
      </mu-button>
    </mu-dialog>

    <!-- 导入多语言 -->
    <p-i18n-sup-upload
      :show.sync="upload"
      :staticId="$route.params.id.split('-')[1]"
      @refresh="refreshI18n">
    </p-i18n-sup-upload>

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
import { Res, I18n, Static } from '~/common/types'
import pI18nSupUpload from '~/components/pI18nSupUpload.vue'
import pI18nExport from '~/components/pI18nExport.vue'
import pI18nEdit from '~/components/pI18nEdit.vue'
import { STATIC } from '~/common/constants'


@Component({
  components: {
    pI18nSupUpload,
    pI18nExport,
    pI18nEdit
  }
})
export default class extends mixins(head, layout) {
  readonly title: string = "项目多语言类型管理"
  edit: boolean = false
  del: boolean = false
  editType: number = EDIT_TYPE.ADD
  upload: boolean = false
  download: boolean = false
  disabled: boolean = false // 导入和导出是否需要禁止
  downloadDisabled: boolean = false

  delName: string = ''

  sta: Static  = { // 当前资源信息
    staticName: '',
    staticDesc: '',
    staticId: '',
    staticVersion: '',
    staticData: []
  }

  currentI18n: I18n = { // 当前要编辑的资源类型
    i18nName: '',
    i18nVersion: '',
    i18nId: '',
    i18nDesc: '',
    i18nImportTime: '',
    i18nImportFileName: '',
    staticId: ''
  } 

  i18nColumns = [
    { title: '多语言名称', name: 'i18nName' },
    { title: '多语言ID', name: 'i18nId'},
    { title: '版本', name: 'version'},
    { title: '导入文件名称', name: 'i18nImportFileName'},
    { title: '多语言最近导入时间', name: 'i18nImportTime'},
    { title: '多语言描述', name: 'i18nDesc'},
    { title: '操作'}
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染多语言列表
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    graphql('sta-queryById', params, async (res: Res) => {
      let { data }  = res
      cb(null, {
        sta: data,
        disabled: !data || !data.staticData || data.staticData.every(item => !item.i18nData)
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
    this.currentI18n.i18nVersion = this.sta.staticVersion
  } 

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 20:57:19  
   * @Desc:   编辑多语言 
   * @Parm:    
   */  
  openEditDialog(row) {
    try {
      this.edit = true
      this.editType = EDIT_TYPE.EDIT
      this.currentI18n = JSON.parse(JSON.stringify(row))
    } catch(err) {
      console.error(err.message)
      // this.$toast.error(err.message)
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 15:08:18  
   * @Desc:   删除多语言确认 
   * @Parm:    
   */  
  openDeleteDialog(row) {
    try {
      this.delName = ''
      this.del = true
      this.currentI18n = JSON.parse(JSON.stringify(row))
    } catch(err) {
      console.error(err.message)
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 15:12:43  
   * @Desc:   删除多语言 
   * @Parm:    
   */  
  delI18n() {
    graphql('i18n-delete', { 
      i18nId: this.currentI18n.i18nId 
    }, (res: Res) => {
      this.del = false
      this.$toast.success(res.msg)
      this.refreshI18n()
    })
  }


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-21 16:39:36  
   * @Desc:   导入翻译多语言 
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
    this.edit = false
    graphql('sta-queryById', { id: this.$route.params.id }, async (res: Res) => {
      this.sta = res.data
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 16:29:59  
   * @Desc:   进入多语言 
   * @Parm:    
   */  
  enterI18n(index: number, i18n: I18n) {
    this.$router.push(`/project/static/i18ns/i18n/${this.$route.params.id}-${i18n.i18nId}`)
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

