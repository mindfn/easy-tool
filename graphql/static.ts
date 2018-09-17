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
  add(params): Lokka {
    return client.mutate(
      `($projectId:String!, $staticName:String!, $staticDesc: String!, $staticType: Int!) {
        data: addStatic(projectId: $projectId, staticName: $staticName, staticDesc: $staticDesc, staticType: $staticType) {
          code,
          msg
        }
      }`,
      params
    )
  },  

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:20:32  
   * @Desc:   删除资源类型 
   * @Parm:    
   */  
  delete(params): Lokka {
    return client.mutate(
      `($projectId:String!, $staticId:String!) {
        data: deleteStatic(projectId: $projectId, staticId: $staticId) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 11:40:02  
   * @Desc:   更新资源类型 
   * @Parm:    
   */  
  update(params) {
    return client.mutate(
      `($staticName:String!, $staticDesc:String!, $staticId:String!, $projectId:String!) {
        data: updateStatic(staticName: $staticName, staticDesc: $staticDesc, staticId: $staticId, projectId: $projectId) {
          code,
          msg
        }
      }`,
      params
    )
  }

  
}