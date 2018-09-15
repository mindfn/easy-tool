<template>
   <mu-dialog 
    :title="editType === EDIT_TYPE.ADD ? '添加资源' : '编辑资源'" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form 
      ref="form" 
      :model="staticData">
      <mu-form-item 
        label="资源类型名称(必填)" 
        prop="staticName"
        :error-text="staticNameErrText"
        :rules="requiredRule">
        <mu-text-field 
          v-model="staticData.staticName"
          :max-length="32">
        </mu-text-field>
      </mu-form-item>
      <mu-form-item prop="radio" label="资源类型">
        <mu-radio 
          v-for="(item, index) in STATIC_VIEW"
          v-model="staticData.staticType"
          :key="index"
          :value="item.value" 
          :label="item.label">
        </mu-radio>
      </mu-form-item>
      <mu-form-item 
        label="资源类型描述(必填)" 
        prop="staticDesc"
        :rules="requiredRule">
        <mu-text-field  
          v-model="staticData.staticDesc" 
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
      @click="updateStatic">
      确认
    </mu-button>
  </mu-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { Static, Res } from '~/common/types'
import { STATIC_VIEW, STATIC } from '~/common/constants'
import { EDIT_TYPE } from '~/constant/project'
import graphql from '~/graphql'
import { COMMON_CODE }  from '~/common/constants'

@Component
export default class extends Vue {
  readonly EDIT_TYPE = EDIT_TYPE
  readonly STATIC_VIEW = STATIC_VIEW

  visible: boolean = false
  editType: number = EDIT_TYPE.ADD
  staticNameErrText: string = ''

  staticData: Static = { // 项目资源类型
    staticId: '',
    staticName: '',
    staticType: STATIC.I18N, // 默认显示多语言
    staticDesc: ''
  }

  requiredRule: Array<object> = [
    { validate: (val) => !!val, message: '请填写字段信息！'}
  ]

  @Prop()
  type!: number 

  @Prop()
  show!: boolean

  @Prop()
  data!: Static

  @Prop()
  projectId!: string

  @Watch('show')
  onShowChanged(val: boolean) {
    this.visible = val
    this.editType = this.type
    this.staticNameErrText = ''

    if(this.type === EDIT_TYPE.ADD ) {
       this.staticData = {
        staticId: '',
        staticName: '',
        staticType: STATIC.I18N, // 默认显示多语言
        staticDesc: ''
      }
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-15 10:57:44  
   * @Desc:   更新项目资源类型 
   * @Parm:    
   */  
  updateStatic() {
    this.staticNameErrText = ''

    this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
       graphql(this.editType === EDIT_TYPE.ADD ? 'sta-add' : 'sta-update', {
          ...this.staticData,
          projectId: this.projectId
       }, (res: Res) => {
         if(res.code === COMMON_CODE.STATIC_NAME_REPEAT) {
          this.staticNameErrText = res.msg
          return
         }
         this.$emit('refresh')
         this.staticNameErrText = ''
         this.$toast.success(res.msg)
       })
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-15 10:22:12  
   * @Desc:   关闭对话框 
   * @Parm:    
   */  
  closeDialog() {
    this.visible = false
    this.$emit('update:show', false)
  }
}
</script>
