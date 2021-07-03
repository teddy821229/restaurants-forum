<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        :src="restaurant.image | emptyImage"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}"
      >
        Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.prevent.stop="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.prevent.stop="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.prevent.stop="deleteLiked(restaurant.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.prevent.stop="addLiked(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import userAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
     async addFavorite(restaurantId) {
       try {
         const { data } = await userAPI.addFavorite({ restaurantId })

         if(data.status !== 'success') {
           throw new Error(data.message)
         }

         this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
      }

       } catch(error) {
         Toast.fire({
           icon: 'error',
           title: '無法加成最愛，請稍後再試。'
         })
       }
    },
    async deleteFavorite(restaurantId) {
       try {
         const { data } = await userAPI.deleteFavorite({ restaurantId })

         if(data.status !== 'success') {
           throw new Error(data.message)
         }

         this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
      }

       } catch(error) {
         Toast.fire({
           icon: 'error',
           title: '無法移除最愛，請稍後再試。'
         })
       }
    },
    async addLiked(restaurantId) {
       try {
         const { data } = await userAPI.addLiked({ restaurantId })

         if(data.status !== 'success') {
           throw new Error(data.message)
         }

         this.restaurant = {
          ...this.restaurant,
          isLiked: true,
      }

       } catch(error) {
         Toast.fire({
           icon: 'error',
           title: '無法按讚，請稍後再試。'
         })
       }
    },
    async deleteLiked(restaurantId) {
       try {
         const { data } = await userAPI.deleteLiked({ restaurantId })

         if(data.status !== 'success') {
           throw new Error(data.message)
         }

         this.restaurant = {
          ...this.restaurant,
          isLiked: false,
      }

       } catch(error) {
         Toast.fire({
           icon: 'error',
           title: '無法移除讚，請稍後再試。'
         })
       }
    },
  },
  mixins: [emptyImageFilter]
}
</script>