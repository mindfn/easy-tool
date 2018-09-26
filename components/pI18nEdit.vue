<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    :title="type === EDIT_TYPE.ADD ? '添加多语言' : '编辑多语言'" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form
      :model="i18n"
      ref="form">
      <mu-form-item 
        v-show="type === EDIT_TYPE.EDIT" 
        label="多语言ID" 
        prop="i18nName">
        <mu-text-field 
          disabled
          v-model="i18n.i18nId">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="多语言最近导入时间" 
        v-show="type === EDIT_TYPE.EDIT" 
        prop="i18nDesc"
        :rules="requiredRule">
        <mu-text-field  
          v-model="i18n.i18nImportTime" 
          disabled>
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="多语言名称(必填)" 
        prop="i18nName"
        :error-text="i18nNameErrText"
        :rules="requiredRule">
        <mu-text-field 
          v-model="i18n.i18nName"
          :max-length="32">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item 
        label="多语言描述(必填)" 
        prop="i18nDesc"
        :rules="requiredRule">
        <mu-text-field  
          v-model="i18n.i18nDesc" 
          multi-line 
          :max-length="120"
          :rows="1" 
          :rows-max="2">
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
      @click="updateI18n">
      确认
    </mu-button>
  </mu-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Res, I18n } from '~/common/types'
import graphql from '~/graphql'
import { COMMON_CODE }  from '~/common/constants'
import { EDIT_TYPE }  from '~/constant/project'

@Component
export default class PProjectEdit extends Vue {
  readonly EDIT_TYPE = EDIT_TYPE
  visible: boolean = false

  i18n: I18n = {
    i18nName: '',
    i18nDesc: '',
    i18nId: '',
    i18nImportTime: ''
  }

  i18nNameErrText: string = ''

  requiredRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'}
  ]

  @Prop()
  type!: number 

  @Prop()
  show!: boolean

  @Prop() 
  staticId!: string

  @Prop()
  data!: I18n

  @Watch('show')
  onShowChanged(val: boolean) : void {
    this.visible = val
    this.i18nNameErrText = ''
    this.type === EDIT_TYPE.ADD 
    ? Object.assign(this.i18n, {
      i18nName: '',
      i18nDesc: ''
    })
    : Object.assign(this.i18n, this.data)
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 19:30:41  
   * @Desc:   更新多语言 
   * @Parm:    
   */  
  updateI18n() {
    this.i18nNameErrText = ''
    this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
      graphql(this.type === EDIT_TYPE.ADD ? 'i18n-add' : 'i18n-update', { ...this.i18n, staticId: this.staticId } , (res: Res) => {
        if(res.code === COMMON_CODE.I18N_NAME_REPEAT) {
          this.i18nNameErrText = res.msg
          return
        }
        this.$emit('refresh')
        this.$toast.success(res.msg)

      })
    })
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
}
</script>