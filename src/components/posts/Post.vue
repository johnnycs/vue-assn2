<template>
  <div class="posts">
      <div>
        <span>{{ post.name }}</span>
        <p>{{ post.content }}</p>
      </div>
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

</style>
