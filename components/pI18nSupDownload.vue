<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="导出多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form
      ref="form" 
      :model="download">
      <mu-form-item 
        label="下载类型">
        <mu-radio 
          v-for="(item, index) in STATIC_I18N_DOWNLOAD_TYPE"
          v-model="download.type"
          :key="index"
          :value="item.value" 
          :label="item.label">
        </mu-radio>
      </mu-form-item>
      <mu-form-item 
        prop="file"
        label="下载命名"
        :rules="fileRule">
        <mu-text-field :max-length="32" v-model="download.file">  
        </mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-button 
      slot="actions" 
      flat 
      @click="closeDialog">
      关闭
    </mu-button>
    <mu-button 
      slot="actions" 
      flat 
      color="primary"
      @click="downloadI18nFile">
      确认
    </mu-button>
  </mu-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Res } from '~/common/types'
import graphql from '~/graphql'
import config from '~/nuxt.config'
import { COMMON_CODE }  from '~/common/constants'
import { STATIC_I18N_DOWNLOAD_TYPE } from '~/common/constants'

interface Download {
  type: string,
  file: string
}

@Component
export default class PI18nExport extends Vue {
  readonly STATIC_I18N_DOWNLOAD_TYPE = STATIC_I18N_DOWNLOAD_TYPE

  visible: boolean = false

  download: Download = {
    type: STATIC_I18N_DOWNLOAD_TYPE[0].value,
    file: 'index'
  }

  fileRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'},
    { validate: (val) => !new RegExp('[\\\\/:*?\"<>|.]').test(val), message: '导出的文件命名不能包含\\\/:*?\"<>|.这些非法字符,请修改后重新导出！'}
  ]
  
  @Prop()
  show!: boolean

  @Prop() 
  staticId!: string

  @Watch('show')
  onShowChanged(val: boolean) : void {
    this.visible = val
    this.download.file='index'
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 20:39:42  
   * @Desc:   关闭对话框 
   * @Parm:    
   */  
  closeDialog() : void {
    this.visible = false
    this.$emit('update:show', false)
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-08 10:25:05  
   * @Desc:   下载多语言 
   * @Parm:    
   */  
  downloadI18nFile(): void {
     this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
      let { download: { type, file } } = this
      window.location.href = `${config.proxyHttp}/i18n/download/sup/${type}/${file}/${this.staticId}`
      this.closeDialog()
     })
  }
}
</script>