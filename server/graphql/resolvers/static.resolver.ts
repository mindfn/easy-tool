import { resolveResponse } from '../../utils'
import { GRAPHQL } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import { resolveArgs, resolveCtx, resolveRes, ProjectModel } from '../../types'
const { RES } = GRAPHQL
const { ERROR, TRUE } = COMMON_CODE

const mutation = {
  async addStatic(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {
      let project: ProjectModel | null = await models.Project.findById(args.projectId)
      if(project && project.projectStatic) {
        let projectStatic = project.projectStatic || []
        // 判断资源类型名称是否重复
        if(projectStatic.length && projectStatic.find(item => item.staticName === args.staticName)) {
          return resolveResponse(
            COMMON_CODE.STATIC_NAME_REPEAT,
            RES.STATIC_NAME_REPEAT
          )  
        }
        project.projectStatic.push({
          staticName: args.staticName,
          staticType: args.staticType,
          staticDesc: args.staticDesc
        })
        await project.save()
        return resolveResponse(
          TRUE,
          RES.ADD_SUCCESS
        )  
      } else {
        return resolveResponse(
          ERROR,
          RES.PROJECT_ERR
        )  
      }
    } catch(err) {
      console.error(err.message)
      return resolveResponse(
        ERROR,
        err.message
      ) 
    }
  }
}

const query = {
}


export default {
  mutation,
  query
}