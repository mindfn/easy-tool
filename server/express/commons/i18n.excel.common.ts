import { Files } from 'formidable'
import { Res } from '../../../common/types'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS } from '../../constant'
import { EXPRESS_UPLOAD_TYPE } from '../../constant'
import xlsx from 'node-xlsx'
import { STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
const { TRUE, ERROR } = COMMON_CODE
const { TEMP_EXCEL, RES } = EXPRESS

export default {

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-28 14:44:07  
   * @Desc:   校验上传的Excel是否符合模板要求
   * @Parm:    
   */  
  validateExcelFormat(i18nSheet: any): Res {
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
        code: ERROR,
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
        code: ERROR,
        msg: resCaption,
        data: null
      }
    }

    return {
      code: TRUE,
      msg: '',
      data: null
    }
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-28 14:36:45  
   * @Desc:   校验上传的Excel是否符合格式要求,如果符合则获取Excel数据
   * @Parm:    
   */  
  processUploadExcel(file: Files): Res {
    let xlsxSheets = xlsx.parse(file.multExcel.path)
    let i18nSheet = xlsxSheets[0].data

    // 检测Excel是否符合模板格式要求
    let result: Res = this.validateExcelFormat(i18nSheet)

    // 表格不符合模板要求
    if(result.code === ERROR) {
      return result
    }

    // 移除表头信息
    i18nSheet.shift()

    return {
      ...result,
      data: i18nSheet
    }
  },  


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-28 16:33:26  
   * @Desc:   将Excel数据转化成对象数组
   * @Parm:    
   */  
  transformExcelToArray(i18nExcelData: any, type): Res  {
    let excelData = <any[]>[]
    // 转成Json数据格式
    for(let column of i18nExcelData) {
      let excelRowData = {}
      for(let index=0,len=STATIC_I18N_TABLE_COLUMNS.length; index < len; index++) {
        // 过滤excel的空列
        if(!column[index]) continue
        let excelRowDataKey = STATIC_I18N_TABLE_COLUMNS[index]

        // 单个多语言(非多语言列表无法上传非中文的其他语言)
        if(type === EXPRESS_UPLOAD_TYPE.COVER) {
          if(excelRowDataKey !== 'key' && excelRowDataKey !== 'chinese') {
            return {
              code: ERROR,
              msg: RES.UPLOAD_SUB_OTHER_LANG,
              data: null
            }
          }
        }
        excelRowData[STATIC_I18N_TABLE_COLUMNS[index]] = column[index]
      }
      if(!Object.keys(excelRowData).length) continue
      excelData.push(excelRowData)
    }

    return {
      code: TRUE,
      msg: '',
      data: excelData
    }
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 19:12:59  
   * @Desc:   计算需要覆盖的多语言信息 
   * @Parm:    
   */  
  processReplaceI18nData(i18nExcelData: any, i18nStoreData: string | undefined, type: number): Res {
    let result: Res = this.transformExcelToArray(i18nExcelData, type)
    if(result.code === ERROR) {
      return result
    }

    i18nExcelData = result.data

    // 当前数据库未导入过多语言信息
    if(!i18nStoreData) {
      result.data = i18nExcelData
    } else {
      
    }

    return result
  }
}