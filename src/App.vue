<template>

  <div class="app">
    <!-- v-if="['login', 'register'].indexOf($route.name) -->
    <!-- <Sidebar v-if="!$route.meta.hideSidebar" /> -->
    <Navbar />

    <!-- <router-link to="about">Friends</router-link> -->
    <router-view />

    <Footer />
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'

// import Sidebar from './components/Sidebar.vue'
import route from './router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<style lang="scss">
  :root{
    --primary: #4ade89;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --cream-light: #FFFBF0;
    --sidebar-width: 300px;
    --navbar-margin: 12.5%;

  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  // body{
  //   background-color: var(--cream-light);
  // }


  // .app{
  //   display: flex;
  //   min-width: 100vw;
  //   min-height: 100vh;

  //   main{
  //     flex: 1 1 0;
  //     padding: 2rem;

  //     @media (max-width: 768px) {
  //       // padding-left: 6rem;
  //     }
  //   }
  // }
</style>
