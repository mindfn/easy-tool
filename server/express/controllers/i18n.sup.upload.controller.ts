import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS, EXPRESS_UPLOAD_TYPE } from '../../constant'
import models from '../../database/models'
import i18nExcelService from '../services/i18n.excel.upload.service'
import { Res } from '../../../common/types'
const moment = require('moment')
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
        let result: Res = i18nExcelService.processUploadExcel(file)

        // 表格不符合模板格式要求
        if(result.code === ERROR) {
          res.json(result)
          return
        } 

        let i18nStoreMatchUpload: any[] = [] // 导入多语言和多语言列表中的多语言一一对应

        // 计算需要覆盖到数据库的导入信息，注意多语言列表上传做跳过处理
        // 跳过是指以数据库信息为主，当前数据库没有的中文和关键信息，则不会导入
        for(let i18nStoreData of i18nStoreDatas) {
          if(!i18nStoreData.i18nData) continue
          let resultData: Res = i18nExcelService.processReplaceI18nData(
            result.data, 
            i18nStoreData,
            EXPRESS_UPLOAD_TYPE.SKIP
          )
          
          // 如果出错终止遍历导入信息，并返回错误信息
          if(resultData.code === ERROR) {
            res.json(resultData)
            return
          }

          i18nStoreMatchUpload.push({
            i18nStoreData,
            ...resultData.data
          })
        }

        let uploadErrData: any[] = []

        // 如果无误，存储数据到数据库
        for(let data of i18nStoreMatchUpload) {
          let { i18nStoreData } = data

          uploadErrData = uploadErrData.concat(data.uploadErrI18nData)
          Object.assign(i18nStoreData, {
            i18nData: JSON.stringify(data.uploadReplaceI18nData),
            i18nImportTime: moment().format('YYYY-MM-DD HH:mm')
          })
          await i18nStoreData.save()
        }

        res.json({
          code: TRUE,
          msg: RES.UPLOAD_SUCCESS,
          data: uploadErrData
        })

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