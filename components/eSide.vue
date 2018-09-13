<template>
  <mu-paper :z-depth="1" class="e-side">
    <mu-list>
      <mu-list-item 
        v-for="(list, index) in sides"
        :key="index"
        :to="list.to"
        @click="handlerSelectItem(list.to)"
        button 
        avatar>
        <mu-list-item-action>
          <mu-avatar :size="32">
            <i :class="list.icon"></i>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-title>
          {{ list.title }}
        </mu-list-item-title>
        <mu-list-item-action v-show="list.selected">
          <i class="fa fa-star"></i>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <mu-divider></mu-divider>
  </mu-paper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Mutation } from 'vuex-class'
import SIDE from '~/constant/side'
import { Common } from '~/common/types'

@Component
export default class ESide extends Vue {
  open: boolean = true
  sides: Common[] = SIDE

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-06 10:21:10  
   * @Desc:   选中菜单处理 
   * @Parm:   to: 选中项的url
   */  
  handlerSelectItem(to: string) : void {
    this.hideAllSelectedIcon()
    for(let side of this.sides) {
      if(side.to === to) {
        side.selected = true
        break
      }
    }
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-06 10:51:43  
   * @Desc:   隐藏选中icon 
   * @Parm:    
   */  
  hideAllSelectedIcon() {
    for(let side of this.sides) {
      side.selected = false
    }
    // this.sides = this.sides.map(side => {
    //   side.selected = false
    //   return side
    // })
  }

  created() {
    const path = this.$route.path.split('/')[1]
    this.handlerSelectItem(`/${path}`)
  } 
}
</script>


<style lang="less" scoped>
.e-side {
  width: 240px;
  height: 100%;

  .e-side-selected {
    color: rgb(33, 150, 243);
  }
}
</style>


