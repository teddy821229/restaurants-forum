<template>
  <div class="container py-5">
    <UserForm 
      :initial-profile="profile"
      @after-submit="afterSubmit"
    />
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue'

const dummyData = {
  'profile': {
    'id': 1,
    'name': 'root',
    'image': 'https://i.imgur.com/58ImzMM.png',
  },
}

export default {
  name: 'UserEdit',
  components: {
    UserForm
  },
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        image: ''
      }
    }
  },
  created() {
    this.fetchProfile()
  },
  methods: {
    fetchProfile() {
      this.profile = dummyData.profile
    },
    afterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>