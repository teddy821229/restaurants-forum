<template>
  <form @submit.prevent.stop="handleSubmit">
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
      >
        Submit
      </button>
    </form>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    initialProfile: {
      type: Object,
      default: () => {
        return {
          id: -1,
          name: '',
          image: ''
        }
      }
    }
  },
  data() {
    return {
      profile: {
        ...this.initialProfile
      }
    }
  },
  methods: {
    handleFileChange(e) {
      const { files } = e.target
      if(files.length === 0) {
        this.profile.image = ""
      }
      const imageURL = window.URL.createObjectURL(files[0])
      this.profile.image = imageURL
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    },
  }
}
</script>