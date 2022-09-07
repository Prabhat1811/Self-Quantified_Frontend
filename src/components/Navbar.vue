<template>
  <nav class="navbar navbar-expand-lg my-navbar">
    <div class="container-fluid my-container">

      <a class="navbar-brand" href="/" v-if="(!store.isLoggedIn)">
        <img src="../../public/cube-solid.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <strong>Quantified-Self</strong>
      </a>

      <a class="navbar-brand" href="/home" v-if="(store.isLoggedIn)">
        <img src="../../public/cube-solid.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <strong>Quantified-Self</strong>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

        <a class="nav-link active nav-item" aria-current="page" v-if="!this.store.isLoggedIn">
          <router-link class="button" to="/login">
            <span><strong>Login</strong></span>
          </router-link>
        </a>

        <a class="nav-link active nav-item" aria-current="page" v-if="this.store.isLoggedIn" @click="logoutUser">
          <router-link class="button" to="/login">
            <span><strong>Logout</strong></span>
          </router-link>
        </a>
        

        <!-- <NewTrackerModal /> -->

      </div>
    </div>
  </nav>
</template>

<script>

import { storeToRefs } from 'pinia'
import { myStore } from '@/stores/counter'
import NewTrackerModal from './NewTrackerModal.vue'

export default {
    setup(){
      const store = myStore()
      const { newStore } = storeToRefs(store)
      return { store }
    },
    components: {
      NewTrackerModal
    },
    methods: {
      logoutUser(){
        this.store.isLoggedIn = false;
        this.$cookies.remove("is_logged_in")
        this.$cookies.remove("csrf_token")
        this.$cookies.remove("auth_token")
        this.$router.push('/')
        
      }
    }
  }

</script>

<style lang="scss" scoped>
  .my-navbar{
    min-width: 100vw;
    position: fixed;
    overflow: hidden;
    top: 0;
    background: rgba(255, 255, 255, 0.98);
    z-index: 999;

    .my-container{
      margin-left: var(--navbar-margin);
      margin-right: var(--navbar-margin);

      @media (max-width: 768px) {
        margin-left: 2.5%;
        margin-right: 2.5%;
      }

      router-link{
        color: red;
      }
      
      .icons{
        display: flex;
        flex-direction: column;
        margin-right: 2.5%;

        .my-icon{
          margin: auto 0;
        }
      }
    }
  }
</style>