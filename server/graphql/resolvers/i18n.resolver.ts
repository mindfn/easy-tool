import { resolveArgs, resolveCtx, resolveRes, I18nModel } from '../../types'
import { resolveResponse } from '../../utils'
import  { COMMON_CODE }  from '../../../common/constants'
import { GRAPHQL } from '../../constant'
const { RES } = GRAPHQL


const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 19:22:32  
   * @Desc:   添加多语言 
   * @Parm:    
   */  
  async addI18n(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
    try {
      let { I18n } = models
      let i18n: I18nModel[] | null = await I18n.find({ staticId: args.staticId })
      
      if(!i18n ||!i18n.length) {
        await I18n.create(args)
        return resolveResponse(
          COMMON_CODE.TRUE,
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
            COMMON_CODE.TRUE,
            RES.ADD_SUCCESS
          )
        }
      }
    } catch(err) {
      return resolveResponse(
        COMMON_CODE.ERROR,
        err.message
      )
    }
  } 
}

const query = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 19:13:38  
   * @Desc:   获取多语言列表信息 
   * @Parm:    
   */  
  i18ns(parent: any, args: resolveArgs, { models, req }: resolveCtx) {
  }
}

export default {
  mutation,
  query
}