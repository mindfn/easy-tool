

import { resolveArgs, resolveCtx } from '../../types'

const mutation = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-04 15:43:21  
   * @Desc:   用户登录 
   * @Parm:    
   */  
  async login(parent: any, args: resolveArgs, { models }: resolveCtx) {
    const { username, password } = args

  }
}

const query = {

}


export default {
  mutation,
  query
}