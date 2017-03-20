<template>
  <div class="sign-in"  style="margin-top:165px;">
    <el-row type="flex" justify="center">
      <el-card style="width:55%;hight:60%;">
        <el-form style="margin-left:30px;margin-right:30px;">
          <el-form-item label="Name">
            <el-input v-model="email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" v-model="password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Sign in</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
// import router from '../router/index.js'

export default {
  name: 'sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.email, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        // console.log(this.email)
        // router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style scoped>
</style>
