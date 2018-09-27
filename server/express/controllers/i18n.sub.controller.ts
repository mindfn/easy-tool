import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import  { COMMON_CODE }  from '../../../common/constants'
import i18nExcelCommon from '../commons/i18n.excel.common'
const { TRUE, ERROR } = COMMON_CODE



/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 17:48:49  
 * @Desc:   导入当前多语言资源类型的一个子类型多语言 
 * @Parm:    
 */
export default function(req: Request, res: Response): void {
  const form = new fromidable.IncomingForm()
  form.encoding = 'utf-8'
  form.keepExtensions = true
  // 上传大小限制200MB
  form.maxFieldsSize = 200 * 1024 * 1024

  form.parse(req, (err: any, fileds: Fields, file: Files) => {
    if(err) {
      console.error(err.message)
      res.json({
        code: ERROR,
        msg: err.message,
        data: null
      })
      return
    }

    let fileName = file.multExcel.name
    let i18nStoreData //最终需要存储到数据库的数据
    console.log(fileName)
    
    if(/\.json/.test(fileName)) { 

    } else if(/\.xlsx/.test(fileName)) {
      // i18nExcelCommon.uploadExcelProcessI18nData(file)
    } else if(/\.properties/.test(fileName)) {
      
    }
  })
}