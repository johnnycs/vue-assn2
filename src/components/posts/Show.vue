<template>
  <div class="post">
    <el-form>
      <div class="comment">
        <h1>Post</h1>
        <el-form-item>
          <iccs340-post :post='post'></iccs340-post>
        </el-form-item>
      </div>
      <div v-for="comment in comments">
        <h2>Comment</h2>
        <el-form-item style="padding-right:40px;">
          <iccs340-comment :comment='comment'></iccs340-comment>
        </el-form-item>
      </div>
      <div style="margin-bottom:60px;">
        <iccs340-new-comment :post='post'></iccs340-new-comment>
      </div>
    </el-form>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'

export default {
  name: 'post',
  components: {
    Iccs340Post: require('./Post'),
    Iccs340Comment: require('../comments/Comment'),
    Iccs340NewComment: require('../comments/New')
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
.no-padding {
  padding-left: 0;
}
</style>
