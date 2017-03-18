<template>
  <div class="post">
    
      <iccs340-post :post='post'></iccs340-post>

      <div v-for="comment in comments">
        <iccs340-comment :comment='comment'></iccs340-comment>
      </div>

    <div>
      <iccs340-post :post='post'></iccs340-post>
    </div>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'

export default {
  name: 'post',
  components: {
    Iccs340Post: require('./Post'),
    Iccs340Comment: require('../comments/Comment')
  },
  data () {
    return {
      post: {},
      comments: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      PostsApi.getPost(this.$route.params.id, _post => {
        this.post = _post
        CommentsApi.getComments(_post.id, _comments => {
          this.comments = _comments
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
