import { apiHelper } from './../utils/helpers'

export default {
  singIn ({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}