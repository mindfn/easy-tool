<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="翻译导入多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form 
      ref="form">
      <mu-form-item>
        <mu-alert color="info" >
          请导入xlsx格式的excel文件！
        </mu-alert>
      </mu-form-item>
      <mu-form-item prop="radio" label="导入文件">
        <mu-text-field readonly v-model="fileName" :error-text="fileErrText">
          <template slot="append">
            <h-upload 
              text="选择文件"
              type="default"
              ref="upload"
              :action="`${proxyHttp}/i18n/upload/translate`"
              :data="{ staticId: staticId }"
              :autoUpload = "false"
              name="multExcel"
              @change="showFileName"
              :on-success="uploadSuccess"
              :on-fail="uploadFail"/>
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
import config from '~/nuxt.config'
import { COMMON_CODE }  from '~/common/constants'

@Component
export default class PProjectEdit extends Vue {
  readonly proxyHttp: string = config.proxyHttp

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
    if (/\.(xlsx|json)$/.test(file)) {
      this.fileName = file
      this.fileErrText = ''
    } else {
      this.fileName = ''
      this.fileErrText = '上传的文件后缀名必须是.json或者.xlsx!'
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
   * @Date:   2018-09-19 16:14:44  
   * @Desc:   上传失败回调 
   * @Parm:    
   */  
  uploadFail() {
  
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