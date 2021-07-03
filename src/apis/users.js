import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`)
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  
  addLiked({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`)
  },

  deleteLiked({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  
  getTopUsers() {
    return apiHelper.get('/users/top')
  },

  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`)
  },

  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  }
}