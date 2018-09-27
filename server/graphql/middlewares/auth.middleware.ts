import { resolveArgs, resolveCtx } from '../../types'
import { COMMON_MSG } from '../../../common/constants'

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-11 10:09:32  
 * @Desc:   判断用户是否已经登录 
 * @Parm:    
 */
const isLogginIn = async (resolve, parent: any, args: resolveArgs, ctx: resolveCtx )  => {

  // const { req } = ctx
  // const { query } = req.body
  // console.log('middlewares query: ', query)
  // // 登录登出不需要做权限判断
  // if (/(login|logout|getRsaKey)/.test(query)) {
  //   return resolve()
  // }
  // await resolve(parent, args, ctx)
  // if(req.session) console.log('middlewares user: ', req.session.user)
  // // 用户未登录跳转到登录页
  // if(req.session && !req.session.user) {
  //   throw new Error(COMMON_MSG.NOT_LOGIN)
  // }
  // return resolve()
  return resolve()
}

export default [
  isLogginIn
]