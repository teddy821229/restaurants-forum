<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div 
      v-for="comment in restaurantComments"
      :key="comment.id"  
    > 
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          :disabled="isProcessing"
          type="button"
          class="btn btn-danger float-right"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
        >
          {{isProcessing ? '處理中' : 'Delete'}}
        </button>
        <h3>
          <router-link 
            :to="{ name: 'user', params: { id: comment.User.id }}"
          >
            {{comment.User.name}}
          </router-link>
        </h3>
        <p>{{comment.text}}</p>
        <footer class="blockquote-footer">
          {{comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from './../utils/mixins'
import { mapState } from 'vuex'
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantComments',
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isProcessing: false
    }
  },
  // for show delete function, need to know whether currentUser is Admin.
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try { 
        this.isProcessing = true
        const { data } = await commentsAPI.delete({ commentId })
        console.log('data', data)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$emit('after-delete-comment', commentId)
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除留言，請稍後再試。'
        })
      }

    }
  },
  mixins: [fromNowFilter]
}
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>