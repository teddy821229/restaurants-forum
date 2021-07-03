<template>
  <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img 
              :src="profile.image | emptyImage"
              width="300px" 
              height="300px"
            >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{profile.name}}</h5>
              <p class="card-text">
                {{profile.email}}
              </p>
              <ul class="list-unstyled list-inline">
                <li><strong>{{comments.length}}</strong> 已評論餐廳</li>
                <li><strong>{{profile.favoritedRestaurantLength}}</strong> 收藏的餐廳</li>
                <li><strong>{{profile.followingsLength}}</strong> followings (追蹤者)</li>
                <li><strong>{{profile.followersLength}}</strong> followers (追隨者)</li>
              </ul>
              <template 
                v-if="profile.id === currentUser.id"
              >
                <router-link
                  :to="{ name: 'user-edit', params: { id: profile.id }}">
                  <button type="submit" class="btn btn-primary">
                    edit
                  </button>
                </router-link>
              </template>
              <template v-else>
                <button 
                  v-if="isFollowed"
                  type="button"
                  class="btn btn-danger"
                  @click.prevent.stop="cancelFollowing(profile)"
                >取消追蹤</button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary"
                  @click.prevent.stop="addFollowing(profile)"
                >追蹤</button>
              </template>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserProfileCard',
  props: {
    profile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    }
  },
  watch: {
    initialIsFollowed(newValue) {
      this.isFollowed = newValue
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async addFollowing(user) {
      try {
        const { data } = await usersAPI.addFollowing({ userId: user.id })
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('after-add-following', this.currentUser)

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤用戶，請稍後再試。'
        })
      }
      
    },
    async cancelFollowing(user) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId: user.id})
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('after-cancel-following', this.currentUser)

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤該用戶，請稍後再試。'
        })
      }
    }
  },
  mixins: [emptyImageFilter]
}
</script>