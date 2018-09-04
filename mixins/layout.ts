import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Layout extends Vue {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-01 14:48:05  
   * @Desc:   页面的layout布局，详见layouts/layout.vue
   * @Parm:    
   */  
  layout(): string {
    return 'layout'
  }
}