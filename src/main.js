import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

import Axios from 'axios'
Vue.$http = Axios

// Axios.defaults.baseURL = 'https://iccs340-vue-api-auth.herokuapp.com/'
Axios.defaults.baseURL = 'http://localhost:3000/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false

import UsersApi from '@/api/users.js'
UsersApi.checkLoggedIn()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
