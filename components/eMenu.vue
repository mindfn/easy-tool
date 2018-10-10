<template>
  <!-- 页面头部导航 -->
  <mu-appbar color="grey700" class="e-menu">
    <mu-menu slot="left">
      <mu-button 
        flat 
        class="e-menu-title">
        <i class="fa fa-superpowers"></i>
        <a>Easy Tool</a>
      </mu-button>
    </mu-menu>
    <mu-menu slot="right">
      <mu-button flat>
        <mu-icon left value=" " class="fa fa-file-text-o"></mu-icon>
        文档
      </mu-button>
      <mu-button 
        flat 
        @click="logout"
        @mousemove="showLogout" 
        @mouseout="showUserName"
        class="e-menu-user">
        <mu-icon left value=" " class="fa fa-user-o"></mu-icon>
        {{ user || $store.state.user.username }}
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
export default class EMenu extends Vue {

  user:string = ''

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
      // 事实上这两者有区别，最优的处理方法是登录以后获取用户信息设置到vuex处理
      // 这里走href等于刷新了页面，从而触发了vuex中的nuxtServerInit
      window.location.href = '/'
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-10 15:40:08  
   * @Desc:   显示注销 
   * @Parm:    
   */  
  showLogout() {
    this.user = '退出登录'
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-10 15:40:24  
   * @Desc:   显示登录用户 
   * @Parm:    
   */  
  showUserName() {
    this.user = this.$store.state.user.username
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

.e-menu-user {
  width: 200px;
}
</style>

