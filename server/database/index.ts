import * as mongoose from 'mongoose'
import { Mongoose } from 'mongoose';

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-08-31 18:50:56  
 * @Desc:   Start mongodb service
 * @Parm:    
 */
export const startDB = () : Promise<Mongoose> => {
  const url:string = <string>process.env[`MONGODB_URI_${process.env.NODE_ENV}`]
  return mongoose.connect(url, { useNewUrlParser: true })
}
