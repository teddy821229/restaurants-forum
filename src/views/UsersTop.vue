<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">
        美食達人
      </h1>
      <hr>
      <div class="row text-center">
        <div 
          class="col-3"
          v-for="user in users"
          :key="user.id"
        > 
          <router-link 
            :to="{ name: 'user', params: { id: user.id }}">
            <img
              :src="user.image | emptyImage"
              width="140px"
              height="140px"
            >
          </router-link>
          <h2>{{user.name}}</h2>
          <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }} </span>
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              :disabled="isProcessing"
              type="button"
              class="btn btn-danger"
              @click.prevent.stop="deleteFollowed(user)"
            >
              取消追蹤
            </button>
            <button
              v-else
              :disabled="isProcessing"
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFollowed(user)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from '../utils/mixins'
import Spinner from './../components/Spinner.vue'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default {
  name: 'userstop',
  components: {
    NavTabs, 
    Spinner
  },
  data () {
    return {
      users: [{
        id: -1,
        name: '',
        image: '',
        followerCount: 0,
        isFollowed: false
      }],
      isLoading: true,
      isProcessing: false
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
     async fetchUsers() {
       try {
         const { data } = await usersAPI.getTopUsers()

         this.users = data.users.map(user => ({
           id: user.id,
           name: user.name,
           image: user.image,
           followerCount: user.FollowerCount,
           isFollowed: user.isFollowed
         }))

         this.isLoading = false
       } catch(error) {
         this.isLoading = false

         Toast.fire({
           icon: 'error',
           title: '暫時無法追蹤該用戶，請稍後再試。'
         })
       }
    },
    async addFollowed(targetUser) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFollowing({ userId: targetUser.id })

        if(data.status !== 'success') {
          throw new Error(status.message)
        }

        this.users = this.users.map(user => {
          if(user.id === targetUser.id) {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            } 
          } else {
            return user
          }
        })

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法追蹤使用者，請稍後再試。'
        })
      }
    },
    async deleteFollowed(targetUser) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFollowing({ userId: targetUser.id })

        if(data.status !== 'success') {
          throw new Error(status.message)
        }

        this.users = this.users.map(user => {
          if(user.id === targetUser.id) {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            } 
          } else {
            return user
          }
        })

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法追蹤使用者，請稍後再試。'
        })
      }
    }
  },
  mixins: [emptyImageFilter]
  
}
</script>