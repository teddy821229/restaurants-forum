<template>
  <div class="container py-5">
    <AdminNav />

    <router-link
      to="/admin/restaurants/new"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>
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
    AdminRestaurantTable,
  }
}
</script>