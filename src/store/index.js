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
    isAuthenticated: false,
    token: ''
  },
  // 用來修改 STATE -> 類似 vue 內的 methods。
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }

      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
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

        return true
      } catch(error) {
        commit('revokeAuthentication')
        console.error(error.message)
        return false
      }
    }
  },
  // 檔案拆分成不同的store，在module匯入。
  modules: {
  }
})
