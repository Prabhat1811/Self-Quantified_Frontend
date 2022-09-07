<template>
  <main class="home-page">
    <NewTrackerModal />

    <!-- TODO -->
    <!-- 1. Hide modal on submit -->
    <!-- 2. Delete tracker on clicking the cross icon -->
    <!-- 3. Update tracker list on new tracker add (No refresh) -->
    <!-- 4. Open tracker logs on clicking on tracker -->
    <!-- 5. Clicking on trcker is automatically scrolling to top -->


    <Trackers />

  </main>
</template>

<script>

  import { myStore } from '@/stores/counter'
  import Trackers from '@/components/Trackers.vue'
  import axios from 'axios'
  import { storeToRefs } from 'pinia'
  import NewTrackerModal from '@/components/NewTrackerModal.vue'
 

  export default {
    setup(){
      const store = myStore()
      const { newStore } = storeToRefs(store)
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
    min-width: 100vw;
    max-width: 100vw;

    padding: 0 0;
    margin-top: 75px;
    // margin-top: auto;
    background-color: #fff;
  }

</style>