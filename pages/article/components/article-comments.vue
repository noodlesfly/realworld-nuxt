<template>
  <div>
    <form v-if="user" class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          minlength="1"
          v-model="commentItem.body"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="postComm">
          Post Comment
        </button>
      </div>
    </form>
    <div v-else>
      <nuxt-link :to="{ name: 'login' }">Sign in</nuxt-link> or
      <nuxt-link :to="{ name: 'register' }">Sign up</nuxt-link> to add comments
      on this article.
    </div>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          class="comment-author"
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{
          comment.createdAt | dateFormat("MMM DD, YYYY")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, postComment } from "@/api/article";
import { mapState } from "vuex";

export default {
  name: "ArticleComments",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [], // 文章列表
      commentItem: {
        slug: this.article.slug,
        body: "",
      },
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const { data } = await getComments(this.article.slug);
      this.comments = data.comments;
    },
    async postComm() {
      const { data } = await postComment(this.commentItem);
      console.log(data);
      // this.getComments();
    },
  },
};
</script>

<style></style>
