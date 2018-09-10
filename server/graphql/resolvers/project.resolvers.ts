

import { resolveResponse } from '../../utils'
import { GRAPHQL } from '../../constant'
import { resolveArgs, resolveCtx, resolveRes, ProjectMode } from '../../types'

const { RES_SUCCESS_CODE, RES } = GRAPHQL

const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 20:43:10  
   * @Desc:   添加项目 
   * @Parm:    
   */  
  addProject(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {
      console.log(req)

    } catch(err) {
    
    }
  }
 
}

const query = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 16:33:38  
   * @Desc:   获取项目列表信息 
   * @Parm:    
   */  
  async projects(parent: any, args: resolveArgs, { models }: resolveCtx): Promise<resolveRes> {
    try {
      let projects: ProjectMode[] = await models.Project.find()
      return resolveResponse(
        RES_SUCCESS_CODE,
        RES.QUERY_SUCCESS,
        projects
      )
    } catch(err) {
      console.error(err)
      return resolveResponse(
        GRAPHQL.RES_ERROR_CODE, 
        err.message) 
    }
  }
}


export default {
  mutation,
  query
}