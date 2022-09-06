<template>
  <main class="home-page">
    <nav class="navbar bg-light my-navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Quantified-Self</a>
        <NewTrackerModal />
      </div>
    </nav>

    <Trackers />

  </main>
</template>

<script>

  import { myStore } from '@/stores/counter'
  import Trackers from '@/components/Trackers.vue'
  import axios from 'axios'
  import NewTrackerModal from '@/components/NewTrackerModal.vue'
 

  export default {
    setup(){
      const store = myStore()
      return { store }
    },
    data() {
      return {
        trackers: [],
      }
    },
    components: {
    Trackers,
    NewTrackerModal
},
    methods: {
      async fetchTrackers() {

        await axios.get(this.store.trackerURL, {'headers' : { 
          "Content-Type": "application/json",
          "Authentication-Token": this.$cookies.get("auth_token")
        }})
          // .then(response => this.store.trackers = response.data)
          .then(response => this.store.updateTrackers(response.data))
      }

    },
    mounted() {
      this.fetchTrackers()
    }
  }
</script>

<style lang="scss" scoped>

  .home-page{
    min-height: 100vh;
    // max-width: 80%;
    padding: 0 0;
    margin-top: 0;
    background-color: #fff;

    .my-navbar{

    }
  }

</style>