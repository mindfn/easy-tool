<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="导入多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form 
      ref="form" :model="i18nData">
      <mu-form-item prop="radio" label="导入类型">
        <mu-radio v-model="i18nData.type" :value="STATIC_I18N_TYPE.ALL" label="全部"></mu-radio>
        <mu-radio v-model="i18nData.type" :value="STATIC_I18N_TYPE.FRONT" label="前端"></mu-radio>
        <mu-radio v-model="i18nData.type" :value="STATIC_I18N_TYPE.BACK" label="后端"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="radio" label="导入格式">
        <mu-radio v-model="i18nData.format" :value="STATIC_I18N_FORMAT.XLSX" label="xlsx"></mu-radio>
        <mu-radio v-model="i18nData.format" :value="STATIC_I18N_FORMAT.JSON" label="json"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="radio" label="导入文件">
        <mu-text-field readonly v-model="fileName" :error-text="fileErrText">
          <template slot="append">
            <h-upload 
              text="选择文件"
              type="default"
              ref="upload"
              :action="`${proxyHttp}/i18n/upload`"
              :data="{ i18nData: JSON.stringify(i18nData), staticId: staticId }"
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
import { EDIT_TYPE }  from '~/constant/project'
import { Project, User, Res } from '~/common/types'
import graphql from '~/graphql'
import { spellFormat } from '~/utils'
import { COMMON_CODE, STATIC_I18N_TYPE, STATIC_I18N_FORMAT }  from '~/common/constants'
import config from '~/nuxt.config'

interface Form {
  type: number,
  format: number
}

@Component
export default class PProjectEdit extends Vue {
  readonly proxyHttp: string = config.proxyHttp
  readonly STATIC_I18N_TYPE = STATIC_I18N_TYPE
  readonly STATIC_I18N_FORMAT = STATIC_I18N_FORMAT

  visible: boolean = false

  i18nData: Form = {
    type: STATIC_I18N_TYPE.BACK, // 类型
    format: STATIC_I18N_FORMAT.XLSX // 格式
  }

  fileName: string = ''
  fileErrText: string = ''


  requiredRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'}
  ]

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
    console.log(res)
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



