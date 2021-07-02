import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // DATA
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // 用來修改 STATE -> 類似 vue 內的 methods。
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }

      state.isAuthenticated = true
    }
  },
  //透過 API 請求資料的 methods
  actions: {
  },
  // 檔案拆分成不同的store，在module匯入。
  modules: {
  }
})
