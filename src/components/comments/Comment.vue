<template>
  <div class="comment">
    <el-form>
      <el-form-item class="el-form-list-text-container">
        <div>
          <span>{{ comment.user.email }}</span>
          <span>{{ comment.content }}</span>
        </div>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .el-form-item {
    padding-left: 40px;
  }
</style>
