import { Files } from 'formidable'
import { Res } from '../../../common/types'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS } from '../../constant'
import { EXPRESS_UPLOAD_TYPE } from '../../constant'
import xlsx from 'node-xlsx'
import { STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
const { TRUE, ERROR } = COMMON_CODE
const { TEMP_EXCEL, RES } = EXPRESS


// 获取各个语言的key, 7是chiense后的english位置，截取english后的所有语言信息key
const STATIC_I18N_TABLE_LANGUAGE_COLUMNS = STATIC_I18N_TABLE_COLUMNS.slice(7)


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
  transformExcelToArray(i18nExcelData: any, i18nStoreData: any, type: number): Res  {
    let excelData = <any[]>[]

    const VERSION = 'version' // 版本key

    // 转成Json数据格式
    for(let row of i18nExcelData) {
      let excelRowData = {}
      for(let index=0,len=STATIC_I18N_TABLE_COLUMNS.length; index < len; index++) {

        let col = row[index]

        // 过滤excel的空列
        if(!col) continue
        let excelRowDataKey = STATIC_I18N_TABLE_COLUMNS[index]

        // 单个多语言(非多语言列表无法上传非中文的其他语言)
        if(type === EXPRESS_UPLOAD_TYPE.COVER) {
          if(STATIC_I18N_TABLE_LANGUAGE_COLUMNS.includes(excelRowDataKey)) {
            return {
              code: ERROR,
              msg: RES.UPLOAD_SUB_OTHER_LANG,
              data: null
            }
          } 
        }

        // 如果导入的信息存在版本则判断版本是否正确
        if(excelRowDataKey === VERSION 
          && col !== i18nStoreData.i18nVersion) {
            return {
              code: ERROR,
              msg: `${RES.UPLOAD_VERSION_ERR}${i18nStoreData.i18nVersion}！`,
              data: null
            }
        } 
        excelRowData[STATIC_I18N_TABLE_COLUMNS[index]] = col
        // 这里注入版本信息，版本信息是在资源类型中创建的
        excelRowData['version'] = i18nStoreData.i18nVersion

      }
      if(!Object.keys(excelRowData).length) continue
      excelData.push(excelRowData)
    }


    // 如果上传的文件缺少中文或者关键信息，则视为无效上传
    if(
      excelData.every(i18n => !i18n.chinese) 
      || excelData.every(i18n => !i18n.key)
      || excelData.some(i18n => !i18n.key || !i18n.chinese)) {
      return {
        code: ERROR,
        msg: RES.UPLOAD_DATA_ERR,
        data: null
      }
    }

    return {
      code: TRUE,
      msg: '',
      data: excelData
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-29 11:42:47  
   * @Desc:   单个多语言导入数据处理
   * @Parm:    
   */  
  processSubReplaceI18nData(i18nUploadData, i18nStoreData): Res {

    // 判断是否导入过翻译语言
    let isTranslated = i18nStoreData.some(i18n => {
      for(let key of STATIC_I18N_TABLE_LANGUAGE_COLUMNS) {
        // 是否有其他语言信息
        if(!i18n[key]) continue
        return true
      }
      return false
    })

    let isCompletelyNew = true // 当前上传文件没有一个多语言信息和数据库匹配(可能上传错了文件)

    // 如果存在其他多语言，则需要保留其他多语言信息
    if(isTranslated) {
      for(let i18n of i18nStoreData) {
        let foundUploadData = i18nUploadData.find(upload => 
          upload.key === i18n.key && upload.chinese === i18n.chinese )
        if(!foundUploadData) continue
        isCompletelyNew = false

        // 需要注意只需要保留多语言信息，例如来源、长度、位置、备注等还是使用上传的信息
        for(let key of STATIC_I18N_TABLE_LANGUAGE_COLUMNS) {
          if(!i18n[key]) continue
          foundUploadData[key] = i18n[key]
        }
      }
    }

    return isCompletelyNew
    ? {
      code: ERROR,
      msg: RES.UPLOAD_COMPLETE_NEW,
      data: null
    } 
    : {
      code: TRUE,
      msg: '',
      data: i18nUploadData
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-29 15:20:41  
   * @Desc:   多语言列表导入数据处理 
   * @Parm:    
   */  
  processPubReplaceI18nData(i18nUploadData, i18nStoreData): any {

    let uploadErrI18nData: any[] = [] // 错误多语言信息

    for(let i=0,len=i18nStoreData.length; i<len; i++) {
      let i18nStore = i18nStoreData[i]
      
      // 在数据库中寻找关键信息和导入相同的多语言
      let index = i18nUploadData.findIndex(i18nUpload => i18nUpload.key === i18nStore.key)
      
      if(index === -1) {
        continue
      }

      let i18nFoundUploadData = i18nUploadData[index]

      i18nFoundUploadData.chinese
      ? i18nFoundUploadData.chinese === i18nStore.chinese
        // 中文和关键信息一致，则替换数据库信息, 这里需要将该条信息直接覆盖到数据库的信息
        ? i18nStoreData[i] = i18nFoundUploadData
        // 否则提示当前导入的多语言信息错误
        :  uploadErrI18nData.push(i18nFoundUploadData)     
      : uploadErrI18nData.push(i18nFoundUploadData)
    }

    return {
      uploadReplaceI18nData: i18nStoreData,
      uploadErrI18nData
    }
  },


  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 19:12:59  
   * @Desc:   计算需要覆盖的多语言信息 
   * @Parm:    
   */  
  processReplaceI18nData(i18nExcelData: any, i18nStoreData: any, type: number): Res {
    try {
      let result: Res = this.transformExcelToArray(i18nExcelData, i18nStoreData, type)
      if(result.code === ERROR) {
        return result
      }

      i18nExcelData = result.data
      let { i18nData } = i18nStoreData
  
      // 当前数据库未导入过多语言信息则直接插入导入多语言信息
      if(!i18nData) {
        result.data = i18nExcelData
      // 单个多语言，如果数据库已经存在非中文的其他多语言，则在覆盖的同时需要将其他多语言保存  
      } else if(type === EXPRESS_UPLOAD_TYPE.COVER) {
        result = this.processSubReplaceI18nData(i18nExcelData, JSON.parse(i18nData))
      // 多语言列表导入，则需要在中文和关键信息对应的字段中插入其他语言
      } else {
        result.data = this.processPubReplaceI18nData(i18nExcelData, JSON.parse(i18nData))
      }

      return result

    } catch(err) {
      console.error(err.message)
      return {
        code: ERROR,
        msg: err.message,
        data: null
      }
    }
   
  }
}