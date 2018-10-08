
import { Res } from '../../../common/types'
import  { COMMON_CODE }  from '../../../common/constants'
import { EXPRESS } from '../../constant'
import { STATIC_I18N_TABLE_COLUMNS } from '../../../common/constants/type'
const { TRUE, ERROR } = COMMON_CODE
const { RES } = EXPRESS

// 获取各个语言的key, 7是chiense后的english位置，截取english后的所有语言信息key
const STATIC_I18N_TABLE_LANGUAGE_COLUMNS = STATIC_I18N_TABLE_COLUMNS.slice(7)

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-30 15:33:15  
   * @Desc:   校验上传的Properties是否符合格式要求 
   * @Parm:    
   */  
  validatePropertiesFormat(i18nUploadData: any): Res {
    // 检测文件是否为空
    if(!Object.keys(i18nUploadData).length) {
      return {
        code: ERROR,
        msg: RES.UPLOAD_PROPERTIES_EMPTY,
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
   * @Date:   2018-09-30 15:42:53  
   * @Desc:   转换成数据库存储的数据格式 
   * @Parm:    
   */  
  transformPropertiesToArray(i18nUploadData: any, version: string): Res {
    let i18nUploadErrData: any = []
    let i18nUploadStoreData: any = []
    for(let key of Object.keys(i18nUploadData)) {
      let chinese = i18nUploadData[key]
      chinese
      ? i18nUploadStoreData.push({
        chinese,
        key,
        version
      })
      : i18nUploadErrData.push(key)
    }

    return i18nUploadStoreData.length
    ? {
      code: TRUE,
      msg: '',
      data: {
        i18nUploadErrData,
        i18nUploadStoreData
      }
    }
    : {
      code: ERROR,
      msg: RES.UPLOAD_PROPERTIES_NO_VALUE,
      data: {
        i18nUploadErrData
      }
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-30 16:36:02  
   * @Desc:   单个多语言导入数据处理(暂时区分开，防止耦合)  
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

    for(let i18n of i18nStoreData) {
      let foundUploadData = i18nUploadData.find(upload => 
        upload.key === i18n.key && upload.chinese === i18n.chinese )
      if(!foundUploadData) continue
      isCompletelyNew = false

      // 疑问：如果之前导入过Excel文件，则是否保留来源、长度、位置、备注等信息
      // 如果需要则在这里处理
        
      if(!isTranslated) continue
      // 如果存在其他多语言，则需要保留其他多语言信息
      // 需要注意只需要保留多语言信息，例如来源、长度、位置、备注等还是使用上传的信息
      for(let key of STATIC_I18N_TABLE_LANGUAGE_COLUMNS) {
        if(!i18n[key]) continue
        foundUploadData[key] = i18n[key]
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
      data: {
        i18nUploadStoreData: i18nUploadData
      }
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-30 15:26:39  
   * @Desc:   上传的properties数据处理 
   * @Parm:    
   */  
  processUploadProperties(i18nUploadData: any, i18nStoreData: any): Res {
    try {
      // 检测Json是否符合模板格式要求
      let result : Res = this.validatePropertiesFormat(i18nUploadData)

      if(result.code === ERROR) {
        return result
      }

      // 转换成数据库存储的数据格式
      result = this.transformPropertiesToArray(i18nUploadData, i18nStoreData.i18nVersion)

      if(result.code === ERROR) {
        return result
      }

      let { i18nData } = i18nStoreData
      let { data } = result

      if(i18nData) {
        result = this.processSubReplaceI18nData(data.i18nUploadStoreData, JSON.parse(i18nData))
      }

      if(result.code !== ERROR) {
        result.data = {
          ...data,
          ...result.data
        }
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