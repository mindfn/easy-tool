import { resolveResponse } from '../../utils'
import { GRAPHQL } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import { resolveArgs, resolveCtx, resolveRes, ProjectModel } from '../../types'
const { RES } = GRAPHQL
const { ERROR, TRUE } = COMMON_CODE

const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:24:04  
   * @Desc:   添加静态资源类型 
   * @Parm:    
   */  
  async addStatic(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes>   {
    try {
      let project: ProjectModel | null = await models.Project.findById(args.projectId)
      if(project && project.projectStatic) {
        let projectStatic = project.projectStatic || []
        for(let sta of projectStatic) {
          // 判断资源名称是否已存在
          if(sta.staticName === args.staticName) {
            return resolveResponse(
              COMMON_CODE.STATIC_NAME_REPEAT,
              RES.STATIC_NAME_REPEAT
            )  
          // 判断资源类型对应的版本是否已存在
          } else if(sta.staticType === args.staticType && sta.staticVersion && args.staticType) {
            return resolveResponse(
              COMMON_CODE.STATIC_VERSION_REPEAT,
              RES.STATIC_TYPE_VERSION_REPEAT
            ) 
          }
        }
        project.projectStatic.push({
          staticVersion: args.staticVersion,
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
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 11:44:24  
   * @Desc:   更新静态资源类型 
   * @Parm:    
   */  
  async updateStatic(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {
      let project: ProjectModel | null = await models.Project.findById(args.projectId)
      if(project && project.projectStatic) {
        let projectStatic = project.projectStatic || []
        let currentStatic

        for(let sta of projectStatic) {
          if(sta.staticId === args.staticId) {
            currentStatic = sta
            continue
          }
          // 判断资源类型名称以及资源类型是否重复
          if(sta.staticName === args.staticName) {
            return resolveResponse(
              COMMON_CODE.STATIC_NAME_REPEAT,
              RES.STATIC_NAME_REPEAT
            )  
          }
        }

        currentStatic.staticName = args.staticName
        currentStatic.staticDesc = args.staticDesc
        await project.save()
        return resolveResponse(
          TRUE,
          RES.UPDATE_SUCCESS
        )  
      } else {
        return resolveResponse(
          ERROR,
          RES.STATIC_ERR
        )  
      }
    } catch(err) {
      console.error(err.message)
      return resolveResponse(
        ERROR,
        err.message
      ) 
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 09:26:55  
   * @Desc:   删除静态资源类型 
   * @Parm:    
   */  
  async deleteStatic(parent: any, args: resolveArgs, { models, req }: resolveCtx) : Promise<resolveRes> {
    try {
      let project = await models.Project.findById(args.projectId)
      if(project && project.projectStatic) {
        let index = project.projectStatic.findIndex(sta => sta.staticId === args.staticId)
        if(index !== -1) {
          project.projectStatic.splice(index, 1)
        }
        await project.save()
        return resolveResponse(
          TRUE,
          RES.ADD_SUCCESS
        ) 
      } else {
        return resolveResponse(
          ERROR,
          RES.STATIC_ERR
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
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-17 15:27:41  
   * @Desc:   通过项目ID和静态资源ID搜索资源
   * @Parm:    
   */  
  async staticByID(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {
      const ids = args.id.split('-')
      let project = await models.Project.findById(ids[0])
      if(project && project.projectStatic) {
        let staToObj
        const sta = project.projectStatic.find(sta => sta.staticId === ids[1])
        const staticData = await models.I18n.findOne({ staticId: ids[1] })
        if(sta) staToObj = sta.toObject()
        return resolveResponse(
          TRUE,
          RES.QUERY_SUCCESS,
          {
            ...staToObj,
            staticData: JSON.stringify(staticData)
          }
        )
      } else {
        return resolveResponse(
          ERROR,
          RES.STATIC_ERR
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


export default {
  mutation,
  query
}