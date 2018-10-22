import { DEVELOPER } from '../common/constants'

export const state = () => ({
  user: {
    username: DEVELOPER.NAME,
    userId: DEVELOPER.ID
  }
})


export const mutations = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-10-09 10:13:24  
   * @Desc:   设置服务端用户登录信息 
   * @Parm:    
   */  
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-11 14:35:59  
   * @Desc:   获取服务端用户登录信息
   * @Parm:    
   */  
  nuxtServerInit ({ commit }, { req }) {
    if(!req.session.username) return
    commit('setUser', {
      username: req.session.username,
      userId: req.session.userId
    })
  }
}