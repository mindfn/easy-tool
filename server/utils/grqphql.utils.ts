import { resolveRes } from '../types'

/** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-05 11:17:35  
   * @Desc:   设置grqphql请求的返回体 
   * @Parm:    
   */  
export const resolveResponse = (code: number, msg: string, data?: any) : resolveRes => {
  return {
    code,
    msg,
    data
  }
}
