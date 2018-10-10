

import { resolveResponse } from '../../utils'
import { GRAPHQL } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import { resolveArgs, resolveCtx, resolveRes, ProjectModel } from '../../types'
const { RES } = GRAPHQL
const { ERROR, TRUE, PROJECT_URL_REPEAT } = COMMON_CODE
import * as dotenv from 'dotenv'
dotenv.config()

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
      let { session } = req
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
          projectMember,
          projectCreator: session && session.username,
          projectCreatorId: session && session.userId
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
      let project: ProjectModel | null = await models.Project.findById(args.projectId)
      let { session } = req

      if(!project) {
        return resolveResponse(
          ERROR,
          RES.PROJECT_NOT_FOUND
        ) 
      }

      // 只有创建者可以删除被创建的项目
      if(project.projectCreatorId === (session && session.userId)) {
        project.remove()
        return resolveResponse(
          TRUE,
          RES.DEL_SUCCESS
        ) 
      } else {
        return resolveResponse(
          ERROR,
          RES.DEL_NO_AUTH
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
        RES.PROJECT_NOT_FOUND
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
      let showProjects: ProjectModel[] = []
      
      // 只显示当前用户创建的或参与的项目列表
      for(let project of projects) {
        if(project.projectCreatorId === args.userId) {
          showProjects.push(project)
          continue
        }

        let { projectMember } = project

        if(!projectMember 
        || !projectMember.length
        || !projectMember.find(member => member.userId === args.userId)) continue
        showProjects.push(project)
      }

      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        showProjects
      )
    } catch(err) {
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
      let projects: ProjectModel[] = args.projectName 
      ? await models.Project.find({
        $or: [ {projectName: { $regex: new RegExp(args.projectName, 'i') } }]
      })
      : await models.Project.find()

      let showProjects: ProjectModel[] = []
      
      // 只显示当前用户创建的或参与的项目列表
      for(let project of projects) {
    
        if(project.projectCreatorId === (req.session && req.session.userId)) {
          showProjects.push(project)
          continue
        }

        let { projectMember } = project

        if(!projectMember 
        || !projectMember.length
        || !projectMember.find(member => member.userId === (req.session && req.session.userId))) continue
        showProjects.push(project)
      }

      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        showProjects
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