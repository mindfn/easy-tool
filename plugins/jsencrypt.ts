import Vue from 'vue'
import { JSEncrypt } from 'jsencrypt'
/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-05 16:52:32  
 * @Desc:   密码加密处理 
 * @Parm:    
 */
Vue.prototype.$encrypt = function(publicKey: string, password: string) : string {
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  return encrypt.encrypt(password)
}


