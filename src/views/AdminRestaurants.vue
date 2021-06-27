<template>
  <div class="container py-5">
    <AdminNav />

    <a
      href="#"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </a>

    <AdminRestaurantTable />
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import AdminRestaurantTable from "../components/AdminRestaurantTable.vue"

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav,
    AdminRestaurantTable
  }
}
</script>