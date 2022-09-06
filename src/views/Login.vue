<template>
  <main class="login-page">
    <!-- <h1>Login</h1>
    <p>This is login page</p> -->
    <!-- <div>
      <h1>Quantified-Self</h1>
    </div> -->
    <div class="form-outer">

      <div class="form-inner">
        <form class="row g-3 needs-validation border rounded" id="myForm" method="POST" @submit.prevent="onSubmit">
          <h1>Quantified-Self</h1>

          <div class="mb-3" id="email">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>

          <button type="submit" class="btn btn-primary" value="Login" id="submit">Login</button>

          <p class="error-msg">{{ errorMessage }}</p>

          <a href="/register">Forgotten your password?</a>
        </form>

        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  </main>
</template>

<script>

import { myStore }  from '../stores/counter'
import axios from 'axios'

export default {
    setup(){
      const store = myStore()
      return { store }
    },
    data() {
      return {
        loginURL: myStore().baseURL + '/login?include_auth_token',
        // loginURL: 'http://127.0.0.1:8000/login?include_auth_token',
        email: "",
        password: "",
        errorMessage: ""
      }
    },

    methods: {
      async onSubmit(e){

        const loginData = {
                "email": this.email,
                "password": this.password
              }

        const res = await axios.post(this.loginURL,
          loginData,
          { "Content-Type": "application/json" }
          )
          .then((response) => {
              $cookies.set("csrf_token", response.data.response.csrf_token)
              $cookies.set("auth_token", response.data.response.user.authentication_token)
          }).then(this.$router.push('/'))
          .catch((response) => {
            //handle error
            this.errorMessage = response.response.data.response.errors[0]
          });

      }
    },
    mounted() {
      // console.log(this.store)
    }
  }

// console.log(store.apiURL)

</script>

<style lang="scss" scoped>
 
  .login-page{
    // padding: 1rem 1rem;
    padding: 0;
    margin: 0;
    margin-top: 10%;

    .form-outer{
      display: flex;
      flex-direction: column;
      width: 30%;
      margin: 0 auto;
      padding: 1rem;

      h1{
        padding:0;
        margin: 0;
        text-align: center;
        word-wrap: break-word;
      }

      .form-inner{
        margin: 1rem 0;

        form{
          padding: 2rem;

        }

        a{
          text-align: center;
        }

        .error-msg{
          color: #ED4956;
          padding: 0;
          margin: 0;
          margin-top: 0.5rem;
        }

      }

    }
    
  }
</style>