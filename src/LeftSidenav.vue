<template lang="html">
  <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Homework 2</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'Posts.index' }">
            <md-icon>view_list</md-icon>
            <span>Posts</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{ name: 'Posts.new' }">
            <md-icon>playlist_add</md-icon>
            <span>Add new post</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <md-button class="md-icon-button" @click.native="logout">
            <md-icon>Logout</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import UsersApi from '@/api/users.js'

export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    logout () {
      UsersApi.logout()
    }
  }
}
</script>

<style lang="css">
</style>
