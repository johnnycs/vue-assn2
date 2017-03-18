import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.use(ElementUI)

Vue.$http = Axios
Axios.defaults.baseURL = 'https://webapphw2.herokuapp.com/'
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
