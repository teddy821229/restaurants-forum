<template>
  <div class="container py-5">
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="250"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{user.id}}
          </th>
          <td>{{user.email}}</td>
          <td>{{user.isAdmin | generateRole}}</td>
          <td>
            <template v-if="user.id !== currentUser.id"> 
              <button
                v-if="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click.prevent.stop="toggleRole(user)"
              >
                set as user
              </button>
              <button
                v-else
                type="button"
                class="btn btn-link"
                @click.prevent.stop="toggleRole(user)"
              >
                set as admin
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import Spinner from './../components/Spinner.vue'
import { mapState } from 'vuex'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'


export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUsers() {
      try {
        const { data, statusText } = await adminAPI.users.get()
        if(statusText !== 'OK') {
          throw new Error()
        }
        this.users = data.users

        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者列表。'
        })
      }
    },
    async toggleRole(targetUser) {
      try {
        const changeAdmin = !targetUser.isAdmin
        const { data } = await adminAPI.users.toggleRole({ userId: targetUser.id, isAdmin: changeAdmin.toString() })
        console.log('data', data)

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if(user.id === targetUser.id) {
            return {
              ...user,
              isAdmin: !user.isAdmin
            }
          } 
          return user
        })

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法修改權限，請稍後再試。'
        })
      }
    }
  },
  filters: {
    generateRole(isAdmin) {
      if(isAdmin) {
        return 'admin'
      }
      return 'user'
    }
  }
}
</script>