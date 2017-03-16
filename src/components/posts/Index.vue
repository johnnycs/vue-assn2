<template>
  <div class="posts">
    <md-list class="custom-list md-triple-line">
      <div v-for="post in posts">
        <router-link :to="{ name: 'Posts.show', params: {id: post.id } }">
          <iccs340-post :post='post'></iccs340-post>
        </router-link>
      </div>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  components: {
    Iccs340Post: require('./Post')
  },
  name: 'posts',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>

<style scoped>
  .posts {
    padding: 0 10px;
  }
</style>
