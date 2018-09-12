import { resolveResponse, loginOA } from '../../utils'
import { GRAPHQL } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import { resolveArgs, resolveCtx, resolveRes, UserModel } from '../../types'
import { createMd5Password } from '../../utils'
const { RES } = GRAPHQL
const { ERROR, TRUE } = COMMON_CODE

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
  async login(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes>   {
    try {
      let { username, password } = args
      const { User } = models
      // 判断用户是否已经注册
      let user: UserModel | null = await User.findOne({ username })
      if(user) {
        if(user.password === createMd5Password(decrypt(password))) {
          if(req.session) {
            req.session.user = user
          } 
          return resolveResponse(
            TRUE, 
            RES.LOGIN_SUCCESS
          )
        } else {
          return resolveResponse(
            ERROR, 
            RES.USER_ERR
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
          if(req.session) req.session.user = user
          return resolveResponse(
            TRUE,
            RES.LOGIN_SUCCESS
          )
        } else {
          return resolveResponse(
            ERROR,
            RES.USER_ERR
          )
        }
      }
    } catch(err) {
      console.error(err)
      return resolveResponse(
        ERROR,
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
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 10:56:56  
   * @Desc:   用户注销 
   * @Parm:    
   */  
  async logout(parent: any, args: resolveArgs, { req }: resolveCtx): Promise<resolveRes>   {
    if(req.session) {
      req.session.user = null
    } 
    return resolveResponse(
      TRUE, 
      RES.LOGIN_SUCCESS
    )
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
      publicKey ? TRUE : ERROR, 
      publicKey ? '' : RES.KEY_ERR, 
      publicKey
    ) 
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 19:42:07  
   * @Desc:   获取用户列表 
   * @Parm:    
   */  
  async users(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let users: UserModel[] = await models.User.find()
      // const { session } = req

      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        // users.filter(user => user.userId !== _userId)
        users
      )

      // if(session && session.user) {
      //   // const _userId = session.user.userId

      //   return resolveResponse(
      //     TRUE,
      //     RES.QUERY_SUCCESS,
      //     // users.filter(user => user.userId !== _userId)
      //     users
      //   )
      // }
      // return resolveResponse(
      //   ERROR,
      //   RES.QUERY_FAIL
      // )
    } catch(err) {
      console.error(err)
      return resolveResponse(
        ERROR, 
        err.message
      ) 
    }
  }
}


export default {
  mutation,
  query
}