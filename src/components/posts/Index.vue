  <template>
  <div class="posts">
      <div class="text item" v-for="post in posts">
        <el-row type="flex" justify="center">
          <el-card class="box-card" style="width:55%;hight:60%;margin-bottom:15px;margin-top:10px;">
            <router-link :to="{ name: 'Posts.show', params: {id: post.id } }">
              <iccs340-post :post='post'></iccs340-post>
            </router-link>
          </el-card>
        </el-row>
      </div>
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
