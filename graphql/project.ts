/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-10 10:51:31  
 * @Desc:   项目接口 
 * @File:   project.ts
 */


import { client } from '~/graphql/lokka'
import { Lokka } from 'lokka'

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-10 10:52:49  
   * @Desc:   获取项目列表
   * @Parm:   
   */  
  getList() : Lokka {
    return client.query(
      `{
        data: projects {
          code,
          msg,
          data {
            projectId,
            projectName,
            projectDesc,
            projectUrl,
            projectMember {
              username,
              userId
            }
          }
        }
      }`
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-10 14:41:25  
   * @Desc:   搜索项目名称 
   * @Parm:   params: 项目名称
   */  
  queryByName(params: object) : Lokka {
    return client.query(
      `query projectByName($projectName:String!){
        data: projectByName(projectName:$projectName) {
          code,
          msg,
          data {
            projectId,
            projectName,
            projectUrl,
            projectDesc,
            projectMember {
              username,
              userId
            }
          }
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-13 11:54:02  
   * @Desc:   通过项目ID搜索项目 
   * @Parm:    
   */  
  queryById(params: object) : Lokka {
    return client.query(
      `query projectByID($projectId:String!){
        data: projectByID(projectId:$projectId) {
          code,
          msg,
          data {
            projectId,
            projectName,
            projectDesc,
            projectStatic {
              staticId,
              staticDesc,
              staticType,
              staticName
            }
          }
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-13 17:44:57  
   * @Desc:   删除项目 
   * @Parm:   projectId: 项目id 
   */  
  delete(projectId: string) {
    return client.mutate(
      `($projectId:String!) {
        data: deleteProject(projectId: $projectId) {
          code,
          msg
        }
      }`,
      { projectId }
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-14 16:36:21  
   * @Desc:   添加项目 
   * @Parm:    
   */  
  add(params) {
    return client.mutate(
      `($projectName:String!, $projectDesc: String!, $projectUrl: String!, $projectMember: [String]) {
        data: addProject(projectName: $projectName, projectDesc: $projectDesc, projectUrl: $projectUrl, projectMember: $projectMember) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-14 16:17:14  
   * @Desc:   更新项目 
   * @Parm:    
   */  
  update(params) {
    return client.mutate(
      `($projectId: String!, $projectName:String!, $projectDesc: String!, $projectUrl: String!, $projectMember: [String]) {
        data: updateProject(projectId: $projectId, projectName: $projectName, projectDesc: $projectDesc, projectUrl: $projectUrl, projectMember: $projectMember) {
          code,
          msg
        }
      }`,
      params
    )
  }
}