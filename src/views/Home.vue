<template>
  <main class="home-page">
    <h1>Quantified-Self</h1>
    <!-- <div v-for="tracker in trackers" :key="tracker.id">
      <h2>{{ tracker.name }}</h2>
      <h2>{{ tracker.description }}</h2>
    </div> -->

    <!-- Tracker = {{ this.trackers }} -->
    <Trackers />

  </main>
</template>

<script>

  import { myStore } from '@/stores/counter'
  import Trackers from '@/components/Trackers.vue'
  import axios from 'axios'
 

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
      Trackers
    },
    methods: {
      async fetchTrackers() {

        await axios.get(this.store.getTrackerURL, {'headers' : { 
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
    background-color: #fff;
  }

</style>