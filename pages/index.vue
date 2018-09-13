<template>
  <section class="page-login">
    <div class="page-login-head">
      <mu-tooltip content="帮助">
        <mu-button icon color="indigo">
          <i class="fa fa-question-circle-o"></i>
        </mu-button>
      </mu-tooltip>
      <mu-tooltip content="插件">
        <mu-button 
          icon 
          color="secondary"
          target="__blank"
          href="https://git.hikvision.com.cn/users/zhuxiankang/repos/easy-tool-front/browse">
          <i class="fa fa-paperclip"></i>
        </mu-button>
      </mu-tooltip>  
      <mu-tooltip content="bitbucket">
        <mu-button 
          icon 
          color="primary"
          target="__blank"
          href="https://git.hikvision.com.cn/users/zhuxiankang/repos/easy-tool/browse?at=refs%2Fheads%2Fdev">
          <i class="fa fa-bitbucket"></i>
        </mu-button>
      </mu-tooltip>  
    </div>
    <mu-flex 
      align-items="center"
      fill
      class="page-login-body">
      <mu-card class="page-login-card" raised>
        <mu-card-title  
          class="page-card-title"
          title="EASY TOOL" 
          sub-title="静态资源管理，我们更高效"></mu-card-title>
        <mu-card-text>
          <mu-form ref="form" :model="form">
            <mu-form-item 
              label="用户名" 
              prop="username"
              :rules="usernameRules">
              <mu-text-field 
                prop="username" 
                v-model="form.username"
                @keyup.native.enter="submit"></mu-text-field>
            </mu-form-item>
            <mu-form-item 
              label="密码" 
              prop="password"
              :rules="passwordRules">
              <mu-text-field 
                type="password" 
                prop="password"
                v-model="form.password"
                @keyup.native.enter="submit">
              </mu-text-field>
            </mu-form-item>
            <mu-form-item class="page-card-footer">
              <mu-button 
                color="primary" 
                @click="submit">登录</mu-button>
              <mu-button @click="reset">重置</mu-button>
            </mu-form-item>
          </mu-form>
        </mu-card-text>
      </mu-card>
    </mu-flex>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import head from '~/mixins/head'
import graphql from '~/graphql'
import { Res, User } from '~/common/types'
import Vue from 'vue'

@Component
export default class extends mixins(head) {
  readonly title:string = "登录"

  form: User = {
    username: '',
    password: ''
  }

  usernameRules: Array<object> = [
    { validate: (val) => !!val, message: '请填写用户名'},
  ]

  passwordRules: Array<object> = [
    { validate: (val) => !!val, message: '请填写密码'},
  ]

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-07-23 17:39:42  
   * @Desc:   表单提交 
   * @Parm:    
   */  
  submit(): void {
    this.$refs.form['validate']().then((valid: boolean) => {
      if(!valid) return
      // 获取公钥
      graphql('user-getRsaKey', this.login)
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-05 11:40:13  
   * @Desc:   登陆账号
   * @Parm:    
   */  
  login(data: Res ) : void {
    const { form } = this
    graphql('user-login', {
      ...form,
      password: Vue.prototype.$encrypt(data.data, form.password)
    }, (res: Res) => {
      this.$router.push('/project')
    })
  }

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-01 11:02:36  
   * @Desc:   重置表单 
   * @Parm:    
   */  
  reset(): void {
    Object.assign(this.form, {
      password: '',
      username: ''
    })
    this.$refs.form['clear']()
  }
}
</script>

<style lang="less" scoped>
.page-login {
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: url('~assets/img/login/login-bg.png');
  .page-login-head {
    line-height: 80px;
    text-align: right;
    vertical-align: middle;
    padding-right: 32px;
    .mu-icon-button {
      vertical-align: middle;
    }
  }
  .page-login-body {
    height: 100%;
    .page-login-card {
      width: 100%; 
      max-width: 350px;
      margin: 0 auto;
      margin-top: -200px;
    }
    .page-card-title  {
      text-align: center;
      .mu-card-title {
        font-size: 30px;
        line-height: 60px;
        color: rgba(0,0,0,.54);
      }
    }
    .page-card-footer {
      align-items: center;
    }
  }
}
</style>



