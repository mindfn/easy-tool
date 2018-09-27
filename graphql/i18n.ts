import { client } from '~/graphql/lokka'
import { Lokka } from 'lokka'

export default {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 19:37:50  
   * @Desc:   添加多语言 
   * @Parm:    
   */  
  add(params): Lokka {
    return client.mutate(
      `($i18nName:String!, $i18nDesc: String!, $staticId: String!) {
        data: addI18n(i18nName: $i18nName, i18nDesc: $i18nDesc, staticId: $staticId) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-26 21:07:34  
   * @Desc:   更新多语言 
   * @Parm:    
   */  
  update(params) {
    return client.mutate(
      `($i18nName:String!, $i18nDesc: String!, $i18nId: String!) {
        data: updateI18n(i18nName: $i18nName, i18nDesc: $i18nDesc, i18nId: $i18nId) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 15:19:06  
   * @Desc:   删除多语言 
   * @Parm:    
   */  
  delete(params) {
    return client.mutate(
      `($i18nId: String!) {
        data: deleteI18n(i18nId: $i18nId) {
          code,
          msg
        }
      }`,
      params
    )
  },

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-27 16:46:42  
   * @Desc:   通过多语言ID搜索多语言  
   * @Parm:    
   */  
  queryById(params) {
    return client.query(
      `query ($id: String!) {
        data: i18nByID(id: $id) {
          code,
          msg,
          data {
            i18nId,
            i18nName,
            i18nDesc,
            i18nImportTime,
            i18nImportFileName,
            i18nData
          }
        }
      }`,
      params
    )
  }
}


