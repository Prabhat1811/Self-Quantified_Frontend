<template>
  <main class="home-page">
    <h1>Quantified-Self</h1>
    <!-- <div v-for="tracker in trackers" :key="tracker.id">
      <h2>{{ tracker['address']['city'] }}</h2>
      <h2>{{ tracker.address.city }}</h2>
    </div> -->

    Tracker = {{ this.trackers }}
  </main>
</template>

<!-- <script setup>

import { ref, onMounted} from 'vue'
import axios from 'axios'

// let trackers = ref(Array)

let trackers = ref([
  {
    "address": "Kashipur"
  }
])

// function put(){
//   trackers = [1, 2, 3]
// }
// put()
async function fetchTrackers() {

    const res = axios.get('https://random-data-api.com/api/v2/users?size=2')
      // .then((response) => {
      //   console.log(response.data[0]['address'])
      //   trackers = response.data
      // })

    return res
}

// trackers = fetchTrackers()


onMounted(() => {
  // console.log("The component is now mounted")
  // const res = ref(null)

  // METHOD 1
  // fetch('https://random-data-api.com/api/v2/users?size=2')
  //   .then((res) => res.json())
  //   .then(data => {
  //     res.value = data
  //   })

  // METHOD 2
  // axios.get('https://random-data-api.com/api/v2/users?size=2')
  //   .then(res => trackers = res.data);

  trackers = fetchTrackers()
  console.log(trackers)
  
}) -->

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        trackers: [],
        getURL: "http://127.0.0.1:8000/api/tracker"
      }
    },
    methods: {
      async fetchTrackers() {

        await axios.get(this.getURL, {'headers' : { 
          "Content-Type": "application/json",
          "Authentication-Token": this.$cookies.get("auth_token")
        }})
          .then(response => this.trackers = response.data)
      }

    },
    mounted() {
      // this.trackers = this.fetchTrackers()
      // console.log(this.trackers)
      this.fetchTrackers()
    }
  }
</script>

<style lang="scss" scoped>

  .home-page{
    min-height: 100vh;
  }

</style>