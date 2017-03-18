<template>
  <div class="side-nav">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{ name: 'Posts.new' }">
          <span>Add new post</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link :to="{ name: 'Posts.index' }">
          <span>Posts</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" @click.native="logout">
        <span>Log out</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import UsersApi from '@/api/users.js'

export default {
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      UsersApi.logout()
    }
  }
}
</script>

<style lang="css">
</style>
