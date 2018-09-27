<template>
  <div class="page-container">
    <mu-card>
      <!-- 卡片头部 -->
      <mu-row>
        <!-- 描述 -->
        <mu-col :span="8">
          <mu-card-header 
            :title="i18n.i18nName" 
            :sub-title="i18n.i18nDesc">
            <mu-avatar slot="avatar" @click="leaveI18n">
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
          <mu-button 
            flat 
            textColor="grey600"
            @click="openUploadDialog">
            <mu-icon left value=" " class="fa fa-upload"></mu-icon>
            导入多语言
          </mu-button>
          <mu-button 
            :disabled="!i18n.i18nData || !i18n.i18nData.length"
            flat 
            textColor="grey600">
            <mu-icon left value=" " class="fa fa-download"></mu-icon>
            导出多语言
          </mu-button>
        </div>
        <!-- 列表 -->
        <div class="page-body-table">
          <!-- 暂无数据 -->
          <div 
            v-if="!i18n.i18nData || !i18n.i18nData.length"
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
                :data="i18n.i18nData"
                fit>
                <template slot-scope="scope">
                  
                </template>
              </mu-data-table>
            </mu-paper>
          </mu-container>
        </div>
      </div>
    </mu-card> 

    <!-- 导入多语言 -->
    <p-i18n-sub-upload
      :show.sync="upload"
      :i18nId="$route.params.id.split('-')[2]">
    </p-i18n-sub-upload>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
// import { EDIT_TYPE } from '~/constant/project'
import head from '~/mixins/head'
import layout from '~/mixins/layout'
import graphql from '~/graphql'
import { Res, I18n } from '~/common/types'
import pI18nSubUpload from '~/components/pI18nSubUpload.vue'
// import pI18nTranslateUpload from '~/components/pI18nTranslateUpload.vue'
// import pI18nExport from '~/components/pI18nExport.vue'
// import pI18nEdit from '~/components/pI18nEdit.vue'
// import { STATIC } from '~/common/constants'


@Component({
  components: {
    pI18nSubUpload
  }
})
export default class extends mixins(head, layout) {
  readonly title: string = "项目多语言管理"

  upload: boolean = false

  i18n: I18n = {
    i18nName: '',
    i18nId: '',
    i18nDesc: '',
    i18nImportTime: '',
    i18nImportFileName: '',
    staticId: '',
    i18nData: ''
  }

  i18nColumns = [
    { title: '文件名称', name: 'i18nImportFileName' },
    { title: '关键信息', name: 'key' },
    { title: '版本', name: 'version'},
    { title: '中文', name: 'chinese'},
    { title: '导入时间', name: 'i18nImportTime'}
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 18:35:29  
   * @Desc:   渲染多语言
   * @Parm:    
   */  
  asyncData ({ params }, cb) {
    // 2对应当前多语言id
    graphql('i18n-queryById', { id: params.id.split('-')[2] }, async (res: Res) => {
      cb(null, {
        i18n: res.data
      })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 15:55:09  
   * @Desc:   离开当前多语言管理
   * @Parm:    
   */  
  leaveI18n() {
    let ids = this.$route.params.id.split('-')
    // 0对应项目id, 1对应多语言类型id
    this.$router.push(`/project/static/i18ns/${ids[0]}-${ids[1]}`)
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 17:38:46  
   * @Desc:   打开导入多语言对话框 
   * @Parm:    
   */  
  openUploadDialog() {
    this.upload = true
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
}
</style>

