<template>
  <div class="new-post">
    <!-- <md-list class="md-double-line"> -->
      <!-- <md-subheader class="md-inset">New Post</md-subheader> -->
      <!-- <md-list-item> -->
        <!-- <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar> -->
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
      <!-- </md-list-item> -->
      <!-- <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Content</label>
            <md-textarea v-model="post.content" placeholder=""></md-textarea>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="createPost">Save</md-button>
        <span style="flex: 1"></span>
      </md-list-item> -->
    <!-- </md-list> -->
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
