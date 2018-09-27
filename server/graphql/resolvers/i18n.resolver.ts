import { resolveArgs, resolveCtx, resolveRes, I18nModel } from '../../types'
import { resolveResponse } from '../../utils'
import  { COMMON_CODE }  from '../../../common/constants'
import { GRAPHQL } from '../../constant'
const { RES } = GRAPHQL
const { ERROR, TRUE } = COMMON_CODE


const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 19:22:32  
   * @Desc:   添加多语言 
   * @Parm:    
   */  
  async addI18n(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let { I18n } = models
      let i18n: I18nModel[] | null = await I18n.find({ staticId: args.staticId })
      
      if(!i18n ||!i18n.length) {
        await I18n.create(args)
        return resolveResponse(
          TRUE,
          RES.ADD_SUCCESS
        )
      } else {
        if(i18n.find(data => data.i18nName === args.i18nName)) {
          return resolveResponse(
            COMMON_CODE.I18N_NAME_REPEAT,
            RES.I18N_NAME_REPEAT
          )
        } else {
          await I18n.create(args)
          return resolveResponse(
            TRUE,
            RES.ADD_SUCCESS
          )
        }
      }
    } catch(err) {
      return resolveResponse(
        ERROR,
        err.message
      )
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 15:20:44  
   * @Desc:   更新多语言 
   * @Parm:    
   */  
  async updateI18n(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let i18n: I18nModel | null = await models.I18n.findById(args.i18nId)
      if(i18n) {
        Object.assign(i18n, args)
        await i18n.save()
        return resolveResponse(
          TRUE,
          RES.UPDATE_SUCCESS
        )
      } else {
        return resolveResponse(
          ERROR,
          RES.I18N_NOT_FOUND
        )  
      }
    } catch(err) {
      return resolveResponse(
        ERROR,
        err.message
      )
    }
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 15:21:53  
   * @Desc:   删除多语言 
   * @Parm:    
   */  
  async deleteI18n(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      await models.I18n.deleteOne({ _id: args.i18nId })
      return resolveResponse(
        TRUE,
        RES.DEL_SUCCESS
      )
    } catch(err) {
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
   * @Date:   2018-09-27 16:59:21  
   * @Desc:   通过多语言ID查找多语言 
   * @Parm:    
   */  
  async i18nByID(parent: any, args: resolveArgs, { models, req }: resolveCtx): Promise<resolveRes> {
    try {
      let i18n = await models.I18n.findById(args.id)
      return resolveResponse(
        TRUE,
        RES.QUERY_SUCCESS,
        i18n
      )
    } catch(err) {
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