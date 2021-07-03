<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">
        人氣餐廳
      </h1>

      <hr>
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="card mb-3"
        style="max-width: 540px;margin: auto;"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="#">
              <img
                class="card-img"
                :src="restaurant.image | emptyImage"
              >
            </a>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
              {{ restaurant.name }}
              </h5>
              <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <router-link 
                :to="{ name: 'restaurant', params: { id: restaurant.id }}"
                class="btn btn-primary mr-2"
              >Show
              </router-link>
              <!-- <a
                href="#"
                class="btn btn-primary mr-2"
              >Show</a> -->

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click.prevent.stop="deleteFavorite(restaurant)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.prevent.stop="addFavorite(restaurant)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from '../utils/mixins'
import restaurantsAPI from './../apis/restaurants'
import Spinner from './../components/Spinner.vue'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs, 
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created() {
    this.fetchRestaurantsTop()
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()

        this.restaurants = data.restaurants
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳資訊，請稍後再試。'
        })
      }
    },
    async addFavorite(targetRestaurant) {
      try {
        const { data } = await userAPI.addFavorite({ restaurantId: targetRestaurant.id })

        if(data.status !== 'success') {
          throw new Error(status.message)
        }

        this.restaurants = this.restaurants.map( restaurant => {
          if(restaurant.id === targetRestaurant.id) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            }
          } else {
            return restaurant
          }
        })

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試。'
        })
      }
      this.restaurants.map(restaurant => {
        if(restaurant.id === targetRestaurant.id) {
          restaurant.isFavorited = true
        }
      })
    },
    async deleteFavorite(targetRestaurant) {
      try {
        const { data } = await userAPI.deleteFavorite({ restaurantId: targetRestaurant.id })

        if(data.status !== 'success') {
          throw new Error(status.message)
        }

        this.restaurants = this.restaurants.map( restaurant => {
          if(restaurant.id === targetRestaurant.id) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false
            }
          } else {
            return restaurant
          }
        })

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛，請稍後再試。'
        })
      }
    }
  },
  mixins: [emptyImageFilter]
  
}
</script>