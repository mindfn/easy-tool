
interface Menu {
  show?: boolean
}

type State = () => Menu

export const state:State = () => ({
  show: true
})

export const mutations = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-08-02 15:25:18  
   * @Desc:   隐藏或显示左侧菜单 
   * @Parm:    
   */  
  toggle (state : Menu) : void {
    state.show = !state.show
  }
}
