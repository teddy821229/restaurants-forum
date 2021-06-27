<template>
 <div class="container py-5">
    <AdminRestaurantForm 
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit(formData) {
      //TODO: 透過API把formData往後端送
      for( let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>