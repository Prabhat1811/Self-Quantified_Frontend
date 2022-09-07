<template>

  <button type="button" class="btn btn-primary modal-button btn-lg rounded-circle" data-bs-toggle="modal" data-bs-target="#trackerModal">
  <h1>+</h1>
  </button>

  <!-- TODO -->
  <!-- Close on add new tracker -->
  <!-- Clear content -->

  <div class="modal fade my-modal" id="trackerModal" tabindex="-1" aria-labelledby="trackerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="trackerModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="tracker-name" class="form-label">Tracker Name</label>
              <input type="tracker-name" class="form-control" id="tracker-name" aria-describedby="emailHelp" v-model="trackerName" required />
            </div>
            <div class="mb-3">
              <label for="tracker-desc" class="form-label">Tracker Description</label>
              <input type="tracker-desc" class="form-control" id="tracker-desc" v-model="trackerDesc">
            </div>
            <div class="mb-3">
              <label class="form-label">Tracker Type</label>
              <select class="form-select" aria-label="Default select example" v-model="trackerType">
                <option value="numerical" selected>Numerical</option>
                <option value="multiple_choice">Multiple Choice</option>
                <option value="time_duration">Time Duration</option>
                <option value="boolean">Boolean</option>
              </select>
            </div>
            <!-- <div class="modal-footer">
              <button type="submit" class="btn btn-primary my-submit" data-bs-dismiss="modal">Submit</button>
            </div> -->
            <button type="submit" class="btn btn-primary my-submit">Submit</button>
          </form> 
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

  import { myStore } from '@/stores/counter'
  import axios from 'axios'
  
  // import $ from 'jquery'


  export default{
    setup(){
      const store = myStore()
      return { store }
    },
    data() {
      return{
        // newTrackerURL: 'http://127.0.0.1:8000/login?include_auth_token',
        trackerName: "",
        trackerDesc: "",
        trackerType: "numerical",
        trackerSettings: ""
      }
    },

    methods: {
      async onSubmit(e){
        const data = {
          "name": this.trackerName,
          "description": this.trackerDesc,
          "tracker_type": this.trackerType,
          "settings": this.trackerSettings
        }

        // console.log(data)

        const headers = {
          "Content-Type": "application/json",
          "Authentication-Token": $cookies.get("auth_token")
        }

        await axios.post(this.store.trackerURL, data,  {
          headers: headers
          })
          .then(() => {
            this.store.trackers = [...this.store.trackers, data]
          })
          .then(() => {
            $('#trackerModal').modal('hide')
            this.trackerName = ""
            this.trackerDesc = ""
            this.trackerType = "numerical"
            this.trackerSettings = ""
          })
          .catch((response) => {
            //handle error
            // this.errorMessage = response.response.data.response.errors[0]
            console.log(response)
          })
      }
    }

  }
</script>

<style lang="scss" scoped>

.modal-button{
  z-index: 999;

  position: fixed;
  bottom: 3rem;
  right: 3rem;

  width: 75px;
  height: 75px;

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;

    width: 55px;
    height: 55px;
  }
}

.my-submit{
  margin-right: auto;
}

</style>