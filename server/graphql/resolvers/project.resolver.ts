

import { resolveResponse } from '../../utils'
import { GRAPHQL } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import { resolveArgs, resolveCtx, resolveRes, ProjectModel } from '../../types'
const { RES } = GRAPHQL
const { ERROR, TRUE, PROJECT_URL_REPEAT } = COMMON_CODE

const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 20:43:10  
   * @Desc:   添加项目 
   * @Parm:    
   */  
  async addProject(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let { projectMember } = args
      const { Project } = models
      if(projectMember && projectMember.length) {
        projectMember = JSON.parse(projectMember)
      } 
      // 判断添加的项目url是否存在
      let project: ProjectModel | null = await Project.findOne({ projectUrl: args.projectUrl })

      if(project) {
        return resolveResponse(
          PROJECT_URL_REPEAT,
          RES.PROJECT_URL_REPEAT
        ) 
      } else {
        await Project.create({
          ...args,
          projectMember
        })
        return resolveResponse(
          TRUE,
          RES.ADD_SUCCESS
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
   * @Date:   2018-09-12 13:42:58  
   * @Desc:   删除项目 
   * @Parm:    
   */  
  async deleteProject(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes>  {
    try {
      await models.Project.remove({_id: args.projectId})
      return resolveResponse(
        TRUE,
        RES.DEL_SUCCESS
      ) 
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
   * @Date:   2018-09-14 16:21:43  
   * @Desc:   更新项目 
   * @Parm:    
   */  
  async updateProject(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
     let project: ProjectModel | null = await models.Project.findById(args.projectId)
     if(project) {
      args.projectMember = JSON.parse(args.projectMember)
      Object.assign(project, args)
      await project.save()
      return resolveResponse(
        TRUE,
        RES.UPDATE_SUCCESS
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
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-10 16:33:38  
   * @Desc:   获取项目列表信息 
   * @Parm:    
   */  
  async projects(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let projects: ProjectModel[] = await models.Project.find()
      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        projects
      )
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
   * @Date:   2018-09-12 15:55:41  
   * @Desc:   通过项目名称搜索项目 
   * @Parm:    
   */  
  async projectByName(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes>   {
    try {
      let projects: ProjectModel[] = await models.Project.find({
        $or: [ {projectName: { $regex: new RegExp(args.projectName, 'i') } }]
      })
      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        projects
      )
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
   * @Date:   2018-09-13 11:50:52  
   * @Desc:   通过项目ID搜索项目 
   * @Parm:    
   */  
  async projectByID(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let project: ProjectModel | null = await models.Project.findById(args.projectId)
      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        project
      )
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