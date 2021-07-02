<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email" >email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        :disabled="isProcessing"
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">
          Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authoriztionAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'


export default {
  data() {
    return {
      email: '',
      password: '',
      isProcessing: false,
    }
  },
  methods: {
    async handleSubmit () {
      try {
        if(!this.email || !this.password) {
        Toast.fire ({
          icon: 'warning',
          title: '請輸入完整的帳號密碼'
          })
          return
        }

        this.isProcessing = true

        const response =  await authoriztionAPI.signIn({
            email: this.email,
            password: this.password
        })

        const { data } = response

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

          //將伺服器回傳的 token 保存在 localStorage 中
        localStorage.setItem('token', data.token)

        // 透過setCurrentUser 把使用者資料存進去 vuex 中的 state
        // 透過 $store 呼叫 store -> index.js
        // 透過 commit 呼叫 mutation 的 function
        this.$store.commit('setCurrentUser', data.user)

          // 成功登入後進行轉址 
        this.$router.push('/restaurants')
      } catch(error) {
        this.password=''
        this.isProcessing = false

        // 顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '輸入的帳號密碼有誤'
        })

        console.log('error', error)

      }
    }
  }
}
</script>