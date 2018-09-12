<template>
  <!-- 页面头部导航 -->
  <mu-appbar color="grey700" class="e-menu">
    <mu-menu slot="left">
      <mu-button 
        flat 
        class="e-menu-title"
        @click="toggleShowMenu">
        <i class="fa fa-superpowers"></i>
        <a>Easy Tool</a>
      </mu-button>
    </mu-menu>
    <mu-menu slot="right">
      <mu-button flat>帮助</mu-button>
      <mu-button flat @click="logout">
        退出登录
      </mu-button>
    </mu-menu>
  </mu-appbar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Mutation, State } from 'vuex-class'
import graphql from '~/graphql'
import { Res } from '~/common/types'

@Component
export default class EHeader extends Vue {

  @Mutation('menu/toggle') stateToggle
  @State(state => state.menu.show) show

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-02 15:31:03  
   * @Desc:   隐藏或显示左侧菜单 
   * @Parm:    
   */  
  toggleShowMenu(): void {
    this.stateToggle()
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-01 20:35:25  
   * @Desc:   注销登录 
   * @Parm:    
   */  
  logout(): void {
    graphql('user-logout', (res: Res) => {
      this.$router.push('/')
    })
  }
}
</script>

<style lang="less" scoped>
.e-menu {
  padding: 0 80px 0 20px;
}

.e-menu-title {
  a {
    color: white;
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    word-spacing: 1px;
    letter-spacing: 1px;
    font-size: 24px;
    font-weight: 600;
    display: inline-block;
  }
  i {
    font-size: 32px;
    display: inline-block;
    margin-right: 16px;
  }
}
</style>

