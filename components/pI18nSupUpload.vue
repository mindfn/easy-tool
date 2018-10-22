<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="导入多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form
      :model="{}">
      <mu-form-item>
        <mu-alert color="info" >
          导入仅支持xlsx格式的excel文件，请参考下载模板文件！
          <br/><br/>
          导入的多语言以当前多语言列表的多语言为主，如果导入的某条多语言信息在多语言列表中不存在（导入多语言的关键信息以及中文和多语言列表中的某条多语言的关键信息以及中文必须完全相同），则会被视为无效，不会做导入处理。
        </mu-alert>
      </mu-form-item>
      <mu-form-item prop="radio" label="导入文件">
        <mu-text-field readonly v-model="fileName" :error-text="fileErrText">
          <template slot="append">
            <h-upload 
              text="选择文件"
              type="default"
              ref="upload"
              :action="`${proxyHttp}/i18n/upload/sup`"
              :data="{ staticId }"
              :autoUpload = "false"
              name="multExcel"
              @change="showFileName"
              :on-success="uploadSuccess" />
          </template>
        </mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-button 
      slot="actions" 
      flat 
      @click="closeDialog">关闭</mu-button>
    <mu-button 
      slot="actions" 
      flat 
      color="primary" 
      @click="uploadFile">确认</mu-button>
  </mu-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Res } from '~/common/types'
import graphql from '~/graphql'
import { COMMON_CODE }  from '~/common/constants'

@Component
export default class PI18nSupUpload extends Vue {
  readonly proxyHttp: string = <string>process.env.PROXY_HTTP

  visible: boolean = false

  fileErrText: string = ''
  fileName: string = ''

  @Prop()
  show!: boolean

  @Prop() 
  staticId!: string

  @Watch('show')
  onShowChanged(val: boolean) : void {
    this.visible = val
    this.fileErrText = ''
    this.fileName = ''
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
   * @Date:   2018-09-19 16:07:15  
   * @Desc:   显示文件名称 
   * @Parm:    
   */  
  showFileName(file: string) : void {
    if(!file) return
    if (/\.xlsx$/.test(file)) {
      this.fileName = file
      this.fileErrText = ''
    } else {
      this.fileName = ''
      this.fileErrText = '导入仅支持xlsx格式的excel文件！'
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 16:09:58  
   * @Desc:   上传成功回调 
   * @Parm:    
   */  
  uploadSuccess(res) {
    if(res.code === COMMON_CODE.ERROR) {
      this.fileErrText = res.msg
      return
    }
    this.$emit('refresh')
    this.$toast.success(res.msg)
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 16:25:03  
   * @Desc:   上传导入文件 
   * @Parm:    
   */  
  uploadFile() {
    if(!this.fileName) {
      this.fileErrText = '请选择需要上传的文件！'
    } 
    if(this.fileErrText) return
    this.$refs.upload['submit']()
  }
}
</script>