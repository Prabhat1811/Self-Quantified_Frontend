<template>

  <div class="outline">
    <div :key="tracker.id" v-for="tracker in this.store.trackers" class="tracker-cards">
        <Tracker :tracker="tracker" />
    </div>
  </div>

</template>


<script>

import Tracker from './Tracker.vue'
import { myStore } from '@/stores/counter'

export default {
  name: "Trackers",
  setup(){
    const store = myStore()
    return { store }
  },
  data() {
    return {
    }
  },
  components: {
    Tracker
  },
}
</script>


<style lang="scss" scoped>

  .outline{
    display: flex;
    flex-direction: column;
    // flex: 2 1 auto;
    width: 70%;
    margin: auto auto;
    
    @media (max-width: 768px) {
      width: 100%;
    }
    
}

</style>