import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/users'

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
  // 使用 dispatch 啟動 actions
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await userAPI.getCurrentUser()

        if (statusText !== 'OK') {
          throw new Error(data.message)
        }

        const { id, name, email, image, isAdmin } = data
        
        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
      } catch(error) {
        console.error(error.message)
      }
    }
  },
  // 檔案拆分成不同的store，在module匯入。
  modules: {
  }
})
