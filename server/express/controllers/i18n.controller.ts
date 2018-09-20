
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

    // 判断表格是否存在数据(不包括表头，所以是小于等于1)
    if(i18nSheet.length <= 1) {
      callback({
        code: ERROR,
        msg: RES.EXCEL_SHEET_EMPTY,
        data: null
      })
      return
    }

    // 判断表头是否存在且是否符合模板表头
    const caption = i18nSheet[0]
    if(caption.length < TEMP_EXCEL.CAPTION.length) {
      callback({
        code: COMMON_CODE.ERROR,
        msg: RES.EXCEL_CAPTION_ERR,
        data: null
      })
      return
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
      callback({
        code: COMMON_CODE.ERROR,
        msg: resCaption,
        data: null
      })
      return
    }

    // 移除表头信息
    i18nSheet.shift()

    let tableData = <any[]>[]

    // 转成数据库需要存储的格式
    for(let column of i18nSheet) {
      let tableRowData = {}
      for(let index=0,len=STATIC_I18N_TABLE_COLUMNS.length; index < len; index++) {
        tableRowData[STATIC_I18N_TABLE_COLUMNS[index]] = column[index] || ''
      }
      tableData.push(tableRowData)
    }

    // 存储到数据库  
    i18n.storeI18n(tableData, type, staticId, callback)
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