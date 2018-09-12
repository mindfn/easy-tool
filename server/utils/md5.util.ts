import * as crypto from 'crypto'
import { MD5 } from '../constant' 

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-07 19:08:30  
 * @Desc:   MD5加密处理 
 * @Parm:    
 */
export const createMd5Password = (password: string) : string => {
  return crypto.createHash('md5').update(`${password}${MD5.SALT}`,'utf8').digest('base64')
}