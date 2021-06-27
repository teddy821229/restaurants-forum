<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

const dummyData = 
  {
    "restaurants": [
        {
            "id": 1,
            "name": "Keely BogisichDa",
            "tel": "119.568.4472 x714",
            "address": "9991 Dorothy Canyon",
            "opening_hours": "08:00",
            "description": "Beatae et sit aut velit sed minus esse est est. Cu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.31238337743435",
            "viewCounts": 42,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-27T05:28:19.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 2,
            "name": "Alexandrine McKenzie DVM",
            "tel": "(266) 656-0345 x270",
            "address": "0142 Smith Gateway",
            "opening_hours": "08:00",
            "description": "voluptas",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.1615087469963035",
            "viewCounts": 16,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-26T15:26:18.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 3,
            "name": "Aglae Gulgowski",
            "tel": "114.568.9420 x031",
            "address": "43362 Noel Turnpike",
            "opening_hours": "08:00",
            "description": "At commodi ut veritatis et velit est quis. Ut laud",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=79.91299846538044",
            "viewCounts": 9,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-26T08:24:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 4,
            "name": "Vicenta Terry",
            "tel": "(044) 422-4145 x30459",
            "address": "19271 Ziemann Cape",
            "opening_hours": "08:00",
            "description": "Quia autem adipisci et rerum officia earum quidem ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=69.23537063310978",
            "viewCounts": 0,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-05-17T05:11:05.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 5,
            "name": "Isabelle Emmerich",
            "tel": "642.420.1404 x4385",
            "address": "34249 Volkman Grove",
            "opening_hours": "08:00",
            "description": "non ea illo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.36127013737524",
            "viewCounts": 10,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-26T09:23:46.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 6,
            "name": "Miss Darrel Funk",
            "tel": "1-174-686-9086 x8073",
            "address": "11507 Weimann Place",
            "opening_hours": "08:00",
            "description": "Veniam omnis in iste perferendis quod quia tempora",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.47709833016874",
            "viewCounts": 3,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-26T09:23:44.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 7,
            "name": "Frederic Grant",
            "tel": "1-249-944-2682 x0629",
            "address": "13538 Michel Rapid",
            "opening_hours": "08:00",
            "description": "Neque sunt et quia est.\nNatus nihil consequatur si",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.4017327223739215",
            "viewCounts": 5,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-05-28T16:24:40.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 8,
            "name": "Dr. Ansley Johnston",
            "tel": "294-480-0575",
            "address": "1071 Idell Gardens",
            "opening_hours": "08:00",
            "description": "eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.1442811444988",
            "viewCounts": 5,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-06-26T12:54:17.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 9,
            "name": "Cecile Schaden",
            "tel": "1-132-261-4174",
            "address": "768 Boyle Canyon",
            "opening_hours": "08:00",
            "description": "Et distinctio commodi reprehenderit omnis. Maxime ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.152519630246154",
            "viewCounts": 2,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-05-28T16:31:23.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        },
        {
            "id": 10,
            "name": "Austin Ratke",
            "tel": "381-750-6862",
            "address": "65970 Trantow Shore",
            "opening_hours": "08:00",
            "description": "Necessitatibus facilis et facilis maxime dolor qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.899630473012444",
            "viewCounts": 3,
            "createdAt": "2021-05-17T05:11:05.000Z",
            "updatedAt": "2021-05-30T03:47:05.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-05-17T05:11:05.000Z",
                "updatedAt": "2021-05-17T05:11:05.000Z"
            },
        }
    ],
}

export default {
  name: 'AdminRestaurantTable',
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
    }
  }
}
</script>