<template>
  <div class="posts">
    <el-row type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="text-align:left;">
          <span style="line-height: 36px;">Title: {{ post.name }}</span>
        </div>
        <div class="text item">
          <div>
            <p> Content: {{ post.content }}</p>
          </div>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .box-card {
    width: 600px;
    margin: 15px;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
