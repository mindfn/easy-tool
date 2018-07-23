<template>
  <section class="page-login">
    <div class="page-login-head">
     
    </div>
    <mu-flex 
      align-items="center"
      fill
      class="page-login-body">
      <mu-card class="page-login-card" raised>
        <mu-card-title  
          class="page-card-title"
          title="Easy Tool" 
          sub-title="资源管理，我们更高效"></mu-card-title>
        <mu-card-text>
          <mu-form ref="form" :model="form">
            <mu-form-item 
              label="用户名" 
              prop="username"
              :rules="usernameRules">
              <mu-text-field prop="username" v-model="form.username"></mu-text-field>
            </mu-form-item>
            <mu-form-item 
              label="密码" 
              prop="password"
              :rules="passwordRules">
              <mu-text-field 
                type="password" 
                prop="password"
                v-model="form.password">
              </mu-text-field>
            </mu-form-item>
            <mu-form-item class="page-card-footer">
              <mu-button color="primary" @click="submit">登录</mu-button>
              <mu-button>重置</mu-button>
            </mu-form-item>
          </mu-form>
        </mu-card-text>
      </mu-card>
    </mu-flex>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from '~/plugins/axios'

@Component
export default class extends Vue {
  head() {
    return {
      title: '登录'
    }
  }

  form: { username: string, password: string } = {
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
  submit() {
    this.$refs.form['validate']().then((valid) => {
      if(!valid) return
    })
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
  background: url('/assets/img/login/login-bg.png');
  .page-login-head {
    line-height: 60px;
    text-align: right;
    padding-right: 32px;
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



