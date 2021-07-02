<template>
  <div class="container py-5">
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <CreateComment
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/eVfTIsY.jpg",
    isAdmin: false,
  },
  isAuthenticated: true,
};

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    async fetchRestaurant(RestaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ RestaurantId });
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours: opening_hours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        },

        this.restaurantComments = Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳詳細資料，請稍後再試。",
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>