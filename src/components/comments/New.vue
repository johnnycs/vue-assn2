<template>
  <div class="new-post">
    <el-row type="flex" justify="center">
      <el-card style="width:55%;hight:60%;">
        <el-form>
          <el-form-item label="Add Comment">
            <el-input placeholder="" v-model="comment.content"></el-input>
            <br><br>
            <el-button type="success" @click="createComment">Submit</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>

</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
.md-list-item {
  padding-left: 40px;
}
</style>
