<template>
  <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img 
              :src="profile.image"
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
                <li><strong>{{profile.commentsLength}}</strong> 已評論餐廳</li>
                <li><strong>{{profile.favoritedRestaurantLength}}</strong> 收藏的餐廳</li>
                <li><strong>{{profile.followingsLength}}</strong> followings (追蹤者)</li>
                <li><strong>{{profile.followersLength}}</strong> followers (追隨者)</li>
              </ul>
              <p 
                v-if="profile.id === currentUser.id"
              >
                <a href="/users/1/edit"><button type="submit" class="btn btn-primary">edit</button></a>
              </p>
              <p v-else>
                <button 
                  v-if="isFollowed"
                  type="button"
                  class="btn btn-danger"
                  @click.prevent.stop="cancelFollowing(currentUser)"
                >取消追蹤</button>
                <button
                  v-else
                  type="button"
                  class="btn btn-primary"
                  @click.prevent.stop="addFollowing(currentUser)"
                >追蹤</button>
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'UserProfileCard',
  data() {
    return {
      currentUser: dummyUser.currentUser
    }
  },
  props: {
    profile: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addFollowing(user) {
      this.$emit('after-add-following', user)
    },
    cancelFollowing(user) {
      this.$emit('after-cancel-following', user)
    }
  }
}
</script>