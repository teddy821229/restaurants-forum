<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <form 
      v-else
      @submit.prevent.stop="handleSubmit"
    >
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
          v-model="profile.name"
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img 
          v-if="profile.image"
          :src="profile.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        {{isProcessing ? "處理中" : "submit"}}
      </button>
    </form>
  </div>
</template>

<script>
import Spinner from './../components/Spinner.vue'
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  components: {
    Spinner
  },
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        image: ''
      },
      isProcessing: false,
      isLoading: true
    }
  },
  created() {
    const { id } = this.$route.params 
    this.fetchUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    if(this.currentUser.id !== id) {
      this.$router.push({ name: 'not-found' })
    }
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId }) 

        if(statusText !== 'OK') {
          throw new Error()
        }
        const { profile } = data
        const { id, name, image } = profile

        this.profile = {
          ...this.profile,
          id,
          name,
          image
        }

        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得資料，請稍後再試。'
        })
      }
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)
        const { data } = await usersAPI.update({ userId: this.currentUser.id, formData})

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push( { name: 'user',  params: { id: this.currentUser.id }})

      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法修改資料，請稍後再試。'
        })
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      if(files.length === 0) {
        this.profile.image = ""
      }
      const imageURL = window.URL.createObjectURL(files[0])
      this.profile.image = imageURL
    }
  }
}
</script>