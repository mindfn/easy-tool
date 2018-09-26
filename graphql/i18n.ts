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
      `($i18nName:String!, $i18nDesc: String!, $staticId: String!, $i18nId: String!) {
        data: updateI18n(i18nName: $i18nName, i18nDesc: $i18nDesc, staticId: $staticId, i18nId: $i18nId) {
          code,
          msg
        }
      }`,
      params
    )
  }
}


