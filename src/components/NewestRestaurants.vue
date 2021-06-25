<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div 
        v-for="restaurant in restaurants" 
        :key="restaurant.id"
      >
        <h4>
          <a href="#">{{ restaurant.name }} </a>
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類'}}</small>
        </h4>
        <p>
          {{restaurant.description}}
        </p>
        {{restaurant.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  filters : {
    fromNow(value) {
      if(!value) {
        return '-'
      }

      return moment(value).fromNow()
    }
  },
  props: {
    restaurants: {
      type: Array,
      required: true
      //props只能做資料顯示，不能夠做資料的修改，要存成自己的組件才能修改。
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>