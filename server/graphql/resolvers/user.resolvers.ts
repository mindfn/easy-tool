

import { resolveResponse } from '../../utils'
import { GRQPHQL } from '../../constant'
import { resolveArgs, resolveCtx, resolveRes } from '../../types'
import * as dotenv from 'dotenv'
dotenv.config()

// import * as ldapjs from 'ldapjs'
const key = new (require('node-rsa'))({b: 512})
key.setOptions({ encryptionScheme : 'pkcs1' }) 


// const client = ldapjs.createClient({
//   url : <string>process.env.LOAP_URI
// })


const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-04 15:43:21  
   * @Desc:   用户登录 
   * @Parm:    
   */  
  async login(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    let { username, password } = args
    if(req.session) {
      password = key.decrypt(password.replace(/\s+/g, '+'), 'utf8')
    }

    return resolveResponse(
      GRQPHQL.RES_ERROR_CODE, 
      '登录失败'
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
    const publicKey = key.exportKey('public')
    if(req.session) req.session.publicKey = publicKey
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