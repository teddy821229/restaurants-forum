<template>
  <div class="container py-5">
    <NavTabs />
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
            type="button"
            class="btn btn-danger"
            @click.prevent.stop="deleteFollowed(user)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="addFollowed(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'


export default {
  name: 'userstop',
  components: {
    NavTabs, 
  },
  data () {
    return {
      users: [{
        id: -1,
        name: '',
        image: '',
        followerCount: 0,
        isFollowed: false
      }]
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
     async fetchUsers() {
       try {
         const { data } = await usersAPI.getTopUsers()
         console.log('data', data)
         this.users = data.users.map(user => ({
           id: user.id,
           name: user.name,
           image: user.image,
           followerCount: user.FollowerCount,
           isFollowed: user.isFollowed
         }))
       } catch(error) {
         Toast.fire({
           icon: 'error',
           title: '暫時無法追蹤該用戶，請稍後再試。'
         })
       }
    },
    async addFollowed(targetUser) {
      
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
    },
    async deleteFollowed(targetUser) {
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
    }
  },
  mixins: [emptyImageFilter]
  
}
</script>