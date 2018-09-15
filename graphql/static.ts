/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-10 10:51:31  
 * @Desc:   静态资源类型接口 
 * @File:   static.ts
 */


import { client } from '~/graphql/lokka'
import { Lokka } from 'lokka'

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-15 11:39:13  
   * @Desc:   添加资源类型 
   * @Parm:    
   */  
  add(params) {
    return client.mutate(
      `($projectId:String!, $staticName:String!, $staticDesc: String!, $staticType: Int!) {
        data: addStatic(projectId: $projectId, staticName: $staticName, staticDesc: $staticDesc, staticType: $staticType) {
          code,
          msg
        }
      }`,
      params
    )
  }
}