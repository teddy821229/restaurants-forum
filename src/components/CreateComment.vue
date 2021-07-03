<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫評論唷！",
          });
          return;
        }

        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        });

        this.text = "";
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "新增評論失敗，請稍後再試。",
        });
      }
    },
  },
};
</script>