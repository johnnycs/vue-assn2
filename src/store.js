import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

// initial state of the app
const state = {
  auth: false
}

// mutations are operations that actually mutates the state.
// never call this directly. these actions are only called by `actions` below.
const mutations = {
  loginMutation (state) {
    console.log('mutations login')
    console.log('store.js login')
    state.auth = true
    console.log(state.auth)
    router.push({ name: 'Posts.index' })
  },
  logoutMutation (state) {
    console.log('mutations logout')
    console.log('store.js logout')
    state.auth = false
    router.push({ name: 'Users.sign_in' })
  }
  // fetchPostsMutation() {
  //   PostsApi.getPosts(function(json){
  //     state.posts = json
  //   })
  // }
}

// operations that can be dispatched from other components.
// example `store.dispatch('login')` will call `login` action and then mutate the state using `mutations.login`
const actions = {
  login: ({ commit }) => commit('loginMutation'),
  logout: ({ commit }) => commit('logoutMutation')
  // fetchPosts: ({ commit }) => commit('fetchPostsMutation')
}

// just getter functions.
const getters = {
  loggedIn: state => state.auth
}

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/store.js will always return the same instance
// identical to exporting
// exports.default = new _vuex2.default.Store({
//   state: state,
//   getters: getters,
//   actions: actions,
//   mutations: mutations
// });

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
