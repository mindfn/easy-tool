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
   * @Date:   2018-09-30 11:07:05  
   * @Desc:   校验上传的Json是否符合格式要求 
   * @Parm:    
   */  
  validateJsonFormat(i18nUploadData: any): Res {
    
    // 上传的JSON必须是对象形式
    if(Object.prototype.toString.call(i18nUploadData) !== "[object Object]") {
      return {
        code: ERROR,
        msg: RES.UPLOAD_JSON_ERR,
        data: null
      }
    }

    // 上传的JSON文件不能为空
    if(!Object.keys(i18nUploadData).length) {
      return {
        code: ERROR,
        msg: RES.UPLOAD_JSON_EMPTY,
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
   * @Date:   2018-09-30 11:21:47  
   * @Desc:   JSON扁平化处理 
   * @Parm:    
   */  
  processJsonFlat(i18nVersion: string, i18nUploadFlatData: any, i18nUploadData: any[], Key: string ='') {

    let currentKey: string = ''

    // 需要注意这里会过滤掉空对象
    for(let key of Object.keys(i18nUploadData)) {
      let chinese  = i18nUploadData[key]
      currentKey += Key + (Key === '' ? key : `.${key}`)   

      // 检测当前属性对应的值是否仍然是一个对象
      if(Object.prototype.toString.call(chinese) == "[object Object]") {
        this.processJsonFlat(i18nVersion, i18nUploadFlatData, chinese, currentKey)
      } else {
        i18nUploadFlatData.push({
          key: currentKey,
          chinese,
          version: i18nVersion
        })
      }

      currentKey = ''
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-30 14:06:43  
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
      data: i18nUploadData
    }
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-30 10:46:16  
   * @Desc:   上传的json数据处理 
   * @Parm:    
   */  
  processUploadJson(i18nUploadData: any, i18nStoreData: any) {
    try {
      // 检测Json是否符合模板格式要求
      let result: Res = this.validateJsonFormat(i18nUploadData)
      
      if(result.code === ERROR) {
        return result
      }

      let i18nUploadFlatData: any[] = [] // 扁平化处理后的Json值

      // JSON扁平化处理({ a: { b: 111}} -> { a.b: 111 })
      this.processJsonFlat(i18nStoreData.i18nVersion, i18nUploadFlatData, i18nUploadData)

      let { i18nData } = i18nStoreData

      // 当前数据库未导入过多语言信息则直接插入导入多语言信息
      !i18nData
      ? result.data = i18nUploadFlatData
      : result = this.processSubReplaceI18nData(i18nUploadFlatData, JSON.parse(i18nData))

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