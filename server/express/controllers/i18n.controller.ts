
import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import { STATIC_I18N_TYPE, STATIC_I18N_FORMAT, STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
import xlsx from 'node-xlsx'
import { EXPRESS } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import models from '../../database/models'
import { I18nModel } from '../../types'
import { I18n } from '../../../common/types'
const moment = require('moment')
const { TEMP_EXCEL, RES } = EXPRESS
const { TRUE, ERROR } = COMMON_CODE


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-21 17:06:05  
 * @Desc:   检测上传的excel表头是否符合模板格式 
 * @Parm:    
 */
function excelCaptionValidate(i18nSheet: any): any {
  // 判断表格是否存在数据(不包括表头，所以是小于等于1)
  if(i18nSheet.length <= 1) {
    return {
      code: ERROR,
      msg: RES.EXCEL_SHEET_EMPTY,
      data: null
    }
  }

  // 判断表头是否存在且是否符合模板表头
  const caption = i18nSheet[0]
  if(caption.length < TEMP_EXCEL.CAPTION.length) {
    return {
      code: COMMON_CODE.ERROR,
      msg: RES.EXCEL_CAPTION_ERR,
      data: null
    }
  }

  let resCaption = ''
  const CAPTION = TEMP_EXCEL.CAPTION
  for(let index=0, len=CAPTION.length; index < len; index ++) {
    let cap = CAPTION[index].trim()
    if(cap !== caption[index].trim()) {
      resCaption = `excel表头信息错误：第${index + 1}列的内容错误, 应为"${cap}"`
      break
    }
  }
  if(resCaption) {
    return {
      code: COMMON_CODE.ERROR,
      msg: resCaption,
      data: null
    }
  }

  return {
    code: COMMON_CODE.TRUE
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-21 17:42:51  
 * @Desc:   将excel数据转化成json数据存储 
 * @Parm:    
 */
function transformExcelToJson(i18nSheet: any): any {
  let tableData = <any[]>[]
  // 转成数据库需要存储的格式
  for(let column of i18nSheet) {
    let tableRowData = {}
    for(let index=0,len=STATIC_I18N_TABLE_COLUMNS.length; index < len; index++) {
      // 过滤excel的空列
      if(!column[index]) continue
      tableRowData[STATIC_I18N_TABLE_COLUMNS[index]] = column[index]
    }
    if(!Object.keys(tableRowData).length) continue
    tableData.push(tableRowData)
  }
  return tableData
}



let i18n = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 17:32:49  
   * @Desc:   多语言导入 
   * @Parm:    
   */  
  upload(req: Request, res: Response): void {
    const form = new fromidable.IncomingForm()
    form.encoding = 'utf-8'
    form.keepExtensions = true

    form.parse(req, (err: any, fileds: Fields, file: Files) => {
      if(err) {
        console.error(err.message)
        res.json({
          code: ERROR,
          msg: err.message,
          data: null
        })
      }
      let i18nData = JSON.parse(<string>fileds.i18nData)
      // 上传excel
      if(i18nData.format === STATIC_I18N_FORMAT.XLSX) {
        i18n.uploadExcel(file, i18nData.type, <string>fileds.staticId, (result) => {
          res.json(result)
        })
      // 上传json  
      } else if(i18nData.format === STATIC_I18N_FORMAT.JSON) {
        i18n.uploadJson(file, i18nData.type, <string>fileds.staticId, (result) => {
          res.json(result)
        })
      } else {
        
      }
    })
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-20 10:50:10  
   * @Desc:   导入excel处理 
   * @Parm:    
   */  
  uploadExcel(file: Files, type: number, staticId: string, callback: Function): void {
    let xlsxSheets = xlsx.parse(file.multExcel.path)
    let i18nSheet = xlsxSheets[0].data

    // 检测表头是否符合要求
    let result = excelCaptionValidate(i18nSheet)

    if(result.code === COMMON_CODE.ERROR) {
      callback(result)
    }
  
    // 移除表头信息
    i18nSheet.shift()

    // 将excel转化成数据库json格式
    let i18nData = transformExcelToJson(i18nSheet)

    // 存储到数据库  
    i18n.storeI18n(i18nData, type, staticId, callback)
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-20 10:51:22  
   * @Desc:   导入json处理 
   * @Parm:    
   */  
  uploadJson(file: Files, type: number, staticId: string, callback: Function): void {

  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-21 16:50:39  
   * @Desc:   导入翻译态多语言 
   * @Parm:    
   */  
  async uploadTranslate(req: Request, res: Response) {
    const { I18n } = models
    const form = new fromidable.IncomingForm()
    form.encoding = 'utf-8'
    form.keepExtensions = true

    form.parse(req, async (err: any, fileds: Fields, file: Files) => {
      if(err) {
        console.error(err.message)
        res.json({
          code: ERROR,
          msg: err.message,
          data: null
        })
      }

      
      // 获取开发态多语言
      let i18n: I18nModel | null = await I18n.findOne({ staticId: fileds.staticId })

      if(!i18n) {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_TRANSLATE_NOT_UPLOAD_DEV,
          data: null
        })
      }

      let xlsxSheets = xlsx.parse(file.multExcel.path)
      let i18nSheet = xlsxSheets[0].data
      
      // 检测表头是否符合要求
      let result = excelCaptionValidate(i18nSheet)
      if(result.code === COMMON_CODE.ERROR) {
        res.json(result)
      }
  
      // 移除表头信息
      i18nSheet.shift()

      // 将excel转化成数据库json格式
      let i18nData = transformExcelToJson(i18nSheet)
    })
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-20 14:26:18  
   * @Desc:   存储上传数据到数据库 
   * @Parm:    
   */  
  async storeI18n(data, type: number, staticId: string, callback: Function) {
    const { I18n } = models
    let i18nData: I18n = {
      staticId
    }

    switch (type) {
      case STATIC_I18N_TYPE.ALL:
        break
      
      // 后端多语言
      case STATIC_I18N_TYPE.BACK:
        i18nData.i18nBackEndData = JSON.stringify(data)
        i18nData.i18nBackEndImportTime = moment().format('YYYY-MM-DD HH:mm')
        break 
      
      // 前端多语言
      case STATIC_I18N_TYPE.FRONT:
        i18nData.i18nFrontEndData = JSON.stringify(data)
        i18nData.i18nFrontImportTime = moment().format('YYYY-MM-DD HH:mm')
        break

      default:
        break  
    }

    try {
      let i18n: I18nModel | null = await I18n.findOne({ staticId })
      if(!i18n) {
        await I18n.create(i18nData)
        callback({
          code: TRUE,
          msg: RES.UPLOAD_SUCCESS,
          data: null
        })
        return
      } else {
        Object.assign(i18n, i18nData)
        await i18n.save()
        callback({
          code: TRUE,
          msg: RES.UPLOAD_SUCCESS,
          data: null
        })
      }
    } catch(err) {
      callback({
        code: ERROR,
        msg: err.message,
        data: null
      })
    }
  }
}



export default i18n