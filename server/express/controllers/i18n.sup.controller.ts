import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS, EXPRESS_UPLOAD_TYPE } from '../../constant'
import models from '../../database/models'
import i18nExcelCommon from '../commons/i18n.excel.common'
import { Res } from '../../../common/types'
const { TRUE, ERROR } = COMMON_CODE
const { RES } = EXPRESS


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-27 17:48:49  
 * @Desc:   导入当前多语言资源类型的所有多语言 
 * @Parm:    
 */
export default function(req: Request, res: Response): void {
  const form = new fromidable.IncomingForm()
  form.encoding = 'utf-8'
  form.keepExtensions = true
  // 上传大小限制200MB
  form.maxFieldsSize = 200 * 1024 * 1024

  form.parse(req, async (err: any, fileds: Fields, file: Files) => {
    if(err) {
      console.error(err.message)
      res.json({
        code: ERROR,
        msg: err.message,
        data: null
      })
      return
    }

    try {
      let fileName = file.multExcel.name
      let i18nReplaceData //最终需要插入到数据库的多语言信息
      // 数据库已存在的多语言列表信息
      let i18nStoreDatas: any  = await models.I18n.find({ staticId: fileds.staticId })

      // 当前多语言列表中没有任何多语言信息
      if(!i18nStoreDatas 
        || !i18nStoreDatas.length 
        || i18nStoreDatas.every(i18n => !i18n.i18nData)) {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_SUP_EMPTY,
          data: null
        })
        return
      }

      if(/\.xlsx$/.test(fileName)) { 

        // 检测Excel是否符合格式要求并获取Excel数据
        let result: Res = i18nExcelCommon.processUploadExcel(file)

        // 表格不符合模板格式要求
        if(result.code === ERROR) {
          res.json(result)
          return
        } 


      } else {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_FORMAT_ERR,
          data: null
        })
      }

    } catch(err) {
      console.error(err.message)
      res.json({
        code: ERROR,
        msg: err.message,
        data: null
      })
    }
  })
}