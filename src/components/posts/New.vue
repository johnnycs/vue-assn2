<template>
  <div class="new-post">
    <div style="margin-top:50px;">
      <el-row type="flex" justify="center">
        <el-card style="width:55%;hight:60%;">
          <el-form style="margin-left:30px;margin-right:30px;">
            <el-form-item>
              <label>Name</label>
              <el-input v-model="post.name" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
              <label>Content</label>
              <el-input v-model="post.content" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click.native="createPost">Save</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
