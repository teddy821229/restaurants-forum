<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard
        :profile="profile"
        :initial-is-followed="isFollowed"
        :comments="commentAdjust"
        @after-add-following="afterAddFollowing"
        @after-cancel-following="afterCancelFollowing"
      />

      <div class="row">
        <div class="col-md-4">
          <!-- user following card -->
          <UserFollowingsCard :followings="followings" />
          <br />
          <!-- user followers card -->
          <UserFollowersCard :followers="followers" />
        </div>

        <div class="col-md-8">
          <!-- user comments card -->
          <UserCommentsCard :comments="commentAdjust" />
          <br />
          <!-- user favorited restaurant card -->
          <UserFavoritedRestaurantCard
            :favoritedRestaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantCard from "../components/UserFavoritedRestaurantCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantCard,
  },
  data() {
    return {
      profile: {
        id: 0,
        name: "",
        email: "",
        image: "",
        favoritedRestaurantLength: 0,
        followingsLength: 0,
        followersLength: 0,
      },
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      isFollowed: false
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  computed: {
    ...mapState(['currentUser']),
    // 排除餐廳已經不存在的餐廳評論。
    commentAdjust() {
      return this.comments.filter(comment => comment.Restaurant)
    }
  },
  methods: {
    async fetchUser(userId) {
      try {
          const { data, statusText } = await usersAPI.get({ userId });

          if (statusText !== "OK") {
            throw new Error();
          }

          const { profile, isFollowed } = data;
          const {
            id,
            name,
            email,
            image,
            Followings,
            Followers,
            Comments,
            FavoritedRestaurants,
          } = profile;
          this.profile = {
            ...this.profile,
            id,
            name,
            email,
            image,
            favoritedRestaurantLength: FavoritedRestaurants.length,
            followingsLength: Followings.length,
            followersLength: Followers.length,
          };
          this.followings = Followings;
          this.followers = Followers;
          this.comments = Comments
          this.favoritedRestaurants = FavoritedRestaurants;
          this.isFollowed = isFollowed;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試。",
        });
      }
    },
    afterAddFollowing(currentUser) {
      this.followers.push(currentUser);
      this.isFollowed = true;
      this.profile.followersLength += 1
    },
    afterCancelFollowing(currentUser) {
      this.followers = this.followers.filter(
        (follower) => follower.id !== currentUser.id
      );
      this.isFollowed = false;
      this.profile.followersLength -= 1
    },
  },
};
</script>