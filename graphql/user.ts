/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-10 10:51:31  
 * @Desc:   用户接口 
 * @File:   user.ts
 */


import { client } from '~/graphql/lokka'
import { Lokka } from 'lokka'
import { Login } from '~/constant/interface'

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-05 11:35:21  
   * @Desc:   获取公钥 
   * @Parm:    
   */  
  getRsaKey() : Lokka {
    return client.query(
      `{
        data: getRsaKey {
          code,
          msg,
          data
        }
      }`
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-03 15:16:25  
   * @Desc:   登录请求 
   * @Parm:   params: 用户名和密码
   */  
  login(params: Login) : Lokka {
    return client.mutate(
      `($password:String!,$username:String!){
        data: login(password:$password,username:$username) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-03 20:54:50  
   * @Desc:   注销请求 
   * @Parm:   
   */  
  logout() : Lokka {
    return client.mutate(
      `{
        data: logout {
          code,
          msg
        }
      }`
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-14 14:42:01  
   * @Desc:   查询所有用户信息 
   * @Parm:    
   */  
  query() : Lokka {
    return client.query(
      `{
        data: users {
          code,
          msg,
          data {
            userId,
            username
            projectIds {
              projectId
            }
          }
        }
      }`
    )
  }
}
