import * as fs from 'fs'

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 13:50:49  
 * @Desc:   删除当前文件夹以及文件夹下的所有文件 
 * @Parm:    
 */
export const delDir = (path: string) => {
  let files: any[] = []
  if(fs.existsSync(path)) {
    files = fs.readdirSync(path)
    for(let file of files) {
      let curPath = `${path}/${file}`
      if(fs.statSync(curPath).isDirectory()) {
        delDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    }
    fs.rmdirSync(path)
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-10-08 13:51:06  
 * @Desc:   删除当前文件 
 * @Parm:    
 */
export const delFile = (path: string) => {
  fs.unlinkSync(path)
}