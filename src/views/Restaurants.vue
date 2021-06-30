<template>
  <div class="container py-5">
    <NavTabs />

    <RestaurantNavPills
      :categories="categories"
    />
    
    <div class="row">
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <RestaurantPagination 
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
      :category-id="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantNavPills from '../components/RestaurantNavPills.vue'
import RestaurantPagination from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  name: 'restaurants',
  components: {
    NavTabs, 
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created () {
      const { page = '', categoryId = '' } = this.$route.query
      this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },

  beforeRouteUpdate(to, from, next) {
      const { page = '', categoryId = '' } = to.query
      this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
      next()
  },
  methods: {
     async fetchRestaurants ({ queryPage, queryCategoryId }) {
         try {

             const response = await restaurantsAPI.getRestaurants({
                 page: queryPage,
                 categoryId: queryCategoryId
             })

             const { restaurants, categories, categoryId, page, totalPage, prev, next } = response.data

             this.restaurants = restaurants
             this.categories = categories
             this.categoryId = categoryId
             this.currentPage = page
             this.totalPage = totalPage
             this.previousPage = prev
             this.nextPage = next

         } catch (error) {
             Toast.fire({
                 icon: 'error',
                 title: '無法取得餐廳資料，請稍後再試'
             })
         }
      
    }
  }
}
</script>