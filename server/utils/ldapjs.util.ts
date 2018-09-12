import * as dotenv from 'dotenv'
import * as ldapjs from 'ldapjs'

// Node环境变量配置
dotenv.config()

const client = ldapjs.createClient({
  url : <string>process.env.LOAP_URI
})

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-07 19:08:06  
 * @Desc:   OA账号登录 
 * @Parm:    
 */
export const loginOA = (username: string, password: string) : Promise<boolean> => {

  return new Promise(( resolve ) => {
    client.bind(username, password, (err) => {
      client.destroy()
      resolve(err ? false: true)
    })
  })
}
