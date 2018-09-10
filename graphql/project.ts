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
            createTime,
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
   * @Desc:   搜索项目 
   * @Parm:   params: 项目名称和_id 
   */  
  query(params: object) : Lokka {
    return client.query(
      `query projectByName($projectName:String!){
        data: projectByName(projectName:$projectName) {
          code,
          msg,
          data {
            projectId,
            projectName,
            projectDesc,
            createTime,
            projectUrl,
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
      `($projectName:String!, $projectDesc: String, $projectUrl: String!, $projectMember: [String]!) {
        data: createProject(projectName: $projectName, projectDesc: $projectDesc, projectUrl: $projectUrl, projectMember: $projectMember) {
          code,
          msg
        }
      }`,
      params
    )
  }
}