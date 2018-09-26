<template>
  <!-- 项目编辑 -->
  <mu-dialog 
    title="导出多语言" 
    width="520" 
    :open.sync="visible"
    @close="closeDialog">
    <mu-form
      :model="{}">
     
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
      color="primary">
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

@Component
export default class PProjectEdit extends Vue {
  readonly proxyHttp: string = config.proxyHttp

  visible: boolean = false

  @Prop()
  show!: boolean

  @Prop() 
  staticId!: string

  @Watch('show')
  onShowChanged(val: boolean) : void {
    this.visible = val
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