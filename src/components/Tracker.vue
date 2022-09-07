<template>
  <a href="#" class="card">
    <div class="heading">
      <h6 class="title">{{ tracker.name }}</h6>
      <button type="button" class="btn-close" aria-label="Close" @click="removeTracker(tracker.id)"></button>
    </div>

    <div class="desc-type">
      <div class="description">
        {{ tracker.description }}
      </div>

      <span class="type">
        {{ tracker.tracker_type }}
      </span>
    </div>



  </a>
</template>


<script>

import { myStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import axios from 'axios'

export default {
  setup(){
      const store = myStore()
      const { newStore } = storeToRefs(store)
      return { store }
  },
  name: "Tracker",
  props: [
    'tracker'
  ],
  methods: {
    async removeTracker(tracker_id){

      // console.log(tracker_id)
      await axios.delete(this.store.trackerURL, {
        'headers' : { 
          "Content-Type": "application/json",
          "Authentication-Token": this.$cookies.get("auth_token")
        },
        data : {
          "tracker_id": tracker_id
        }
      })
        .then((response) => {
          this.store.trackers = this.store.trackers.filter((tracker => tracker.id !== tracker_id))
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  }
}
</script>


<style lang="scss" scoped>

  .card{
    display: flex;
    // background-color: #FFF5F7;
    margin: 1rem;
    padding: 1rem;
    min-width:15rem;

    .heading{
      display: flex;
      flex-direction: row;

      .title{
        white-space: nowrap;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      button{
        margin-left: auto;
      }
    }

    .desc-type{
      display: flex;
      flex-direction: row;

      .description{
        white-space: nowrap;
        width: 80%;
        margin-right: auto;
        padding-right: auto;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 768px) {
        width: 60%;
      }
      }

      .type{
        margin-left: auto;
      }
    }
  }

</style>