export const state = () => ({
  people: []
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  }
}

export const actions = {
  /** 
   * @Author: zhuxiankang 
   * @Date:   2018-09-11 14:35:59  
   * @Desc:   获取服务端用户session 
   * @Parm:    
   */  
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}