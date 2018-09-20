/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-10 10:51:31  
 * @Desc:   静态资源类型接口 
 * @File:   static.ts
 */


import { client } from '~/graphql/lokka'
import { Lokka } from 'lokka'
// import applo from '~/plugins/vue-applo'
// console.log(applo)

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-15 11:39:13  
   * @Desc:   添加资源类型 
   * @Parm:    
   */  
  add(params): Lokka {
    return client.mutate(
      `($projectId:String!, $staticName:String!, $staticVersion:String!, $staticDesc: String!, $staticType: Int!) {
        data: addStatic(projectId: $projectId, staticName: $staticName, staticVersion:$staticVersion, staticDesc: $staticDesc, staticType: $staticType) {
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
      `($staticName:String!, $staticVersion:String!, $staticDesc:String!, $staticId:String!, $projectId:String!) {
        data: updateStatic(staticName: $staticName, staticVersion:$staticVersion, staticDesc: $staticDesc, staticId: $staticId, projectId: $projectId) {
          code,
          msg
        }
      }`,
      params
    )
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 11:54:02  
   * @Desc:   通过项目ID和资源ID搜索资源
   * @Parm:    
   */  
  queryById(params: object): Lokka {
    return client.query(
      `query staticByID($id:String!){
        data: staticByID(id: $id) {
          code,
          msg,
          data {
            staticId,
            staticName,
            staticDesc,
            staticVersion,
            staticData
          }
        }
      }`,
      params
    )
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 13:38:15  
   * @Desc:   上传多语言导入文件 
   * @Parm:    
   */  
  uploadI18ns(params: object) {
    
  }

  
}