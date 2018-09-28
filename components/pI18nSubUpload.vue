<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="导入多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form 
      ref="form" :model="{}">
      <mu-form-item>
        <mu-alert color="info" >
          导入支持xlsx、json和properties文件格式，需要注意xlsx格式的文件请参考导入模板文件！
          <br/><br/>
          只允许导入带有关键信息和中文的多语言。
          <br/><br/>
          导入会完全覆盖当前的多语言信息，如果当前多语言中存在非中文的其他语言，则在中文和关键信息完全一致的情况下，保留其他语言。
        </mu-alert>
      </mu-form-item>
      <mu-form-item prop="radio" label="导入文件">
        <mu-text-field readonly v-model="fileName" :error-text="fileErrText">
          <template slot="append">
            <h-upload 
              text="选择文件"
              type="default"
              ref="upload"
              :action="`${proxyHttp}/i18n/upload/sub`"
              :data="{ i18nId }"
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


interface Form {
  format: number
}

@Component
export default class PI18nSubUpload extends Vue {
  readonly proxyHttp: string = config.proxyHttp

  visible: boolean = false

  fileName: string = ''
  fileErrText: string = ''

  @Prop()
  show!: boolean

  @Prop() 
  i18nId!: string

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
    if (/\.(xlsx|json|properties)$/.test(file)) {
      this.fileName = file
      this.fileErrText = ''
    } else {
      this.fileName = ''
      this.fileErrText = '上传的文件后缀名必须是.json、.xlsx或.properties!'
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
      return
    }
    this.$refs.upload['submit']()
  }
}
</script>



