
import { Request, Response } from 'express'
import * as fromidable from 'formidable'
import { Files, Fields } from 'formidable'
import { STATIC_I18N_TYPE, STATIC_I18N_FORMAT, STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
import xlsx from 'node-xlsx'
import { EXPRESS } from '../../constant'
import  { COMMON_CODE }  from '../../../common/constants'
import models from '../../database/models'
import { I18n, Res } from '~/common/types';
const moment = require('moment')
const { TEMP_EXCEL, RES } = EXPRESS
const { TRUE, ERROR } = COMMON_CODE


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-21 17:06:05  
 * @Desc:   检测上传的excel表头是否符合模板格式 
 * @Parm:    
 */
function excelCaptionValidate(i18nSheet: any): Res {
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
    code: COMMON_CODE.TRUE,
    msg: '',
    data: null
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


  // return tableData
}


/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-25 13:53:59  
 * @Desc:   上传翻译态多语言时比对翻译态多语言和开发态多语言 
 * @Parm:    
 */
function comparisonTranslateAndDevI18n(translateI18n: any, backI18n: string, frontI18n: string): Res  {
  try {
    let backs = JSON.parse(backI18n)
    let fronts = JSON.parse(frontI18n)

    let frontsErrResult: any[] = []
    let backsErrResult: any[] = []
    // 匹配前端开发态多语言
    comparisonKeyAndChinese(translateI18n, fronts, frontsErrResult)
    // 匹配后端开发态多语言
    comparisonKeyAndChinese(translateI18n, backs, backsErrResult)

    return {
      code: COMMON_CODE.TRUE,
      msg: '',
      data: {
        fronts,
        backs,
        frontsErrResult,
        backsErrResult
      }
    }
  } catch(err) {
    return {
      code: COMMON_CODE.ERROR,
      msg: err.message,
      data: null
    }
  }
}

/** 
 * @Author: zhuxiankang 
 * @Date:   2018-09-25 16:02:53  
 * @Desc:   匹配开发态多语言的key和中文 
 * @Parm:    
 */
function comparisonKeyAndChinese(translateI18n: any, devI18n: any, devErrI18n: any) {
   // 匹配开发态多语言
   for(let i=0,len=devI18n.length; i<len; i++) {
    let front = devI18n[i]
    // 寻找key值相同的开发态多语言
    let index = translateI18n.findIndex(translate => translate.key === front.key)
    // 过滤未匹配的key
    if(index === -1) {
      continue 
    }
    let translate = translateI18n[index]
    if(translate.chinese) {
      translate.chinese === front.chinese
      // 若中文也一样，这表明是需要翻译的开发态多语言
      ? devI18n[i] = translate
      // 否则提示当前需要翻译的中文已经变更会不准确，需要重新翻译处理  
      : devErrI18n.push(translate)
    } else {
      devErrI18n.push(translate)
    }
  }
}




let i18n = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-19 17:32:49  
   * @Desc:   导入开发态多语言
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
      try {
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
      } catch(err) {
        res.json({
          code: ERROR,
          msg: err.message,
          data: null
        })
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

      // 判断开发态多语言是否已经导入
      let i18n: any = await I18n.findOne({ staticId: fileds.staticId })
      if(!i18n || (!i18n.i18nBackEndData && !i18n.i18nFrontEndData)) {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_TRANSLATE_NOT_UPLOAD_DEV,
          data: null
        })
        return
      } else if(!i18n.i18nBackEndData) {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_TRANSLATE_NOT_UPLOAD_BACK,
          data: null
        })
        return
      } else if(!i18n.i18nFrontEndData) {
        res.json({
          code: ERROR,
          msg: RES.UPLOAD_TRANSLATE_NOT_UPLOAD_FRONT,
          data: null
        })
        return
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

      // 将excel转化成json格式并和已经导入的开发态多语言比对
      let i18nData = transformExcelToJson(i18nSheet)
      result = comparisonTranslateAndDevI18n(i18nData, i18n.i18nBackEndData, i18n.i18nFrontEndData,) 
      if(result.code === COMMON_CODE.ERROR) {
        res.json(result)
        return
      }

      let data = result.data
      i18n.i18nBackEndData = JSON.stringify(data.backs)
      i18n.i18nFrontEndData = JSON.stringify(data.fronts)
      i18n.i18nBackEndImportTime = i18n.i18nFrontImportTime = moment().format('YYYY-MM-DD HH:mm')
      await i18n.save()
      res.json({
        code: COMMON_CODE.TRUE,
        msg: RES.UPLOAD_SUCCESS,
        data: {
          frontsErrResult: data.frontsErrResult,
          backsErrResult: data.backsErrResult
        }
      })
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
      let i18n = await I18n.findOne({ staticId })
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