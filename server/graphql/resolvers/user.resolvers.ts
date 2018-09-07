

import { resolveResponse, loginOA } from '../../utils'
import { GRQPHQL } from '../../constant'
import { resolveArgs, resolveCtx, resolveRes, UserModel } from '../../types'
import { createMd5Password } from '../../utils'

// RSA加密处理
const key = new (require('node-rsa'))({b: 512})
key.setOptions({ encryptionScheme : 'pkcs1' }) 

const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-04 15:43:21  
   * @Desc:   用户登录 
   * @Parm:    
   */  
  async login(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {

      let { username, password } = args
      const { User } = models

      // 判断用户是否已经注册
      let user = await User.findOne({ username })
      if(user) {
        if(user.password === createMd5Password(decrypt(password))) {
          if(req.session) req.session.user = user.toObject()
          return resolveResponse(
            GRQPHQL.RES_SUCCESS_CODE, 
            '登录成功！'
          )
        } else {
          return resolveResponse(
            GRQPHQL.RES_ERROR_CODE, 
            '用户名或密码错误！'
          )
        }
      } else {
        // 数据库不存在用户信息，因此需要向ldap发起请求
        password = decrypt(password)
        let loginSuccess: boolean | string = await loginOA(username, password)
        if(loginSuccess)  {
          user = await User.create({
            username,
            password
          })
          if(req.session) req.session.user = user.toObject()
          return resolveResponse(
            GRQPHQL.RES_SUCCESS_CODE, 
            '登录成功！'
          )
        } else {
          return resolveResponse(
            GRQPHQL.RES_ERROR_CODE, 
            '用户名或密码错误！'
          )
        }
      }
    } catch(err) {
      return resolveResponse(
        GRQPHQL.RES_ERROR_CODE, 
        err.message
      )
    }

    /** 
     * @Author: zhuxiankang 
     * @Date:   2018-09-07 19:46:19  
     * @Desc:   登录密码解密 
     * @Parm:    
     */    
    function decrypt(password: string) : string {
      return key.decrypt(password.replace(/\s+/g, '+'), 'utf8')
    }
  }
}

const query = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-05 10:42:33  
   * @Desc:   获取公钥
   * @Parm:    
   */  
  async getRsaKey(parent: any, args: resolveArgs, { req }: resolveCtx): Promise<resolveRes>  {
     
    let publicKey 
    const { session } = req

    if(session && session.publicKey) {
      publicKey = session.publicKey
    // session可能未定义，必须加session检测  
    } else if(session) {
      publicKey = session.publicKey = key.exportKey('public')
    }

    return resolveResponse(
      publicKey ? GRQPHQL.RES_SUCCESS_CODE : GRQPHQL.RES_ERROR_CODE, 
      publicKey ? '' : '获取公钥失败', 
      publicKey) 
  }
}


export default {
  mutation,
  query
}