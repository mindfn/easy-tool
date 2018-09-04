import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Head extends Vue {

  title:string = ''

  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-01 14:47:20  
   * @Desc:   页面的头部标签
   * @Parm:    
   */  
  head(): object {
    return {
      title: this.title
    }
  }
}