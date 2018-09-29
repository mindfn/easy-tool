import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS, EXPRESS_UPLOAD_TYPE } from '../../constant'
import i18nExcelCommon from '../commons/i18n.excel.common'
import { Res } from '../../../common/types'
import models from '../../database/models'
const moment = require('moment')
const { TRUE, ERROR } = COMMON_CODE
const { RES } = EXPRESS

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

      // 数据库已存在的多语言信息
      let i18nStoreData: any  = await models.I18n.findById(fileds.i18nId)
      
      if(/\.json$/.test(fileName)) { 
  
      } else if(/\.xlsx$/.test(fileName)) {
        // 检测Excel是否符合格式要求并获取Excel数据
        let result: Res = i18nExcelCommon.processUploadExcel(file)
        // 表格不符合模板格式要求
        if(result.code === ERROR) {
          res.json(result)
          return
        } 
        // 计算需要覆盖到数据库的导入信息，注意单个多语言上传做覆盖处理
        // 覆盖是指以导入的信息为主，当前数据库的中文和关键信息以导入信息为主
        result = i18nExcelCommon.processReplaceI18nData(
          result.data, 
          i18nStoreData,
          EXPRESS_UPLOAD_TYPE.COVER
        )
        if(result.code === ERROR) {
          res.json(result)
          return
        } 
        // 存储导入的多语言信息
        Object.assign(i18nStoreData, {
          i18nData: JSON.stringify(result.data),
          i18nImportTime: moment().format('YYYY-MM-DD HH:mm'),
          i18nImportFileName: fileName
        })
        await i18nStoreData.save()
        res.json({
          code: TRUE,
          msg: RES.UPLOAD_SUCCESS,
          data: null
        })
      } else if(/\.properties$/.test(fileName)) {
        
      } else {
        res.json({
          code: ERROR,
          msg: EXPRESS.RES.UPLOAD_FORMAT_ERR,
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