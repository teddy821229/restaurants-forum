<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <RestaurantNavPills
        :categories="categories"
      />
      <Spinner v-if="isLoadingCard"/>
      <div v-else class="row">
        <RestaurantCard 
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>

      <RestaurantPagination 
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"
        :category-id="categoryId"
      />

      <div
        v-if="restaurants.length < 1"
        class="text-center"
      >
        <h3>此類別目前尚無任何餐廳資料</h3>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantNavPills from '../components/RestaurantNavPills.vue'
import RestaurantPagination from '../components/RestaurantsPagination.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'restaurants',
  components: {
    NavTabs, 
    RestaurantCard,
    RestaurantNavPills,
    RestaurantPagination,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true,
      isLoadingCard: true,
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
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
     async fetchRestaurants ({ queryPage, queryCategoryId }) {
         try {
           this.isLoadingCard = true

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

             this.isLoading = false
             this.isLoadingCard = false
         } catch (error) {
           this.isLoading = false
           this.isLoadingCard = false
             Toast.fire({
                 icon: 'error',
                 title: '無法取得餐廳資料，請稍後再試'
             })
         }
      
    }
  }
}
</script>