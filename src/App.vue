<template>

  <div class="app">
    <!-- v-if="['login', 'register'].indexOf($route.name) -->
    <Sidebar v-if="!$route.meta.hideSidebar" />


    <!-- <router-link to="about">Friends</router-link> -->
    <router-view />
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from 'vue-router'

import Sidebar from './components/Sidebar.vue'
import route from './router';

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
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--cream-light);
  }

  button{
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app{
    display: flex;
    min-width: 100vw;

    main{
      flex: 1 1 0;
      padding: 2rem;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }
  }
</style>
