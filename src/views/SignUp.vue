<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit"> 
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"

          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"

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
          autocomplete="new-password"

        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"

        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if(!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入姓名'
          })
          return
        }

        if(!this.email) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入信箱'
          })
          return
        }

        if(!this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入密碼'
          })
          return
        }

        if(!this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '請確認密碼'
          })
          return
        }

        if(this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '請確認密碼與確認密碼是否相同'
          })
          return
        }
        
        const { data } = await authorizationAPI.signUp({ 
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
         })
        console.log(data)

        if(data.status === 'error') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'sign-in'})

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '註冊失敗，請稍後再試。'
        })
      }
    }
  }
}
</script>
