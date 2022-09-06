<template>

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  New Tracker
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Time Duration">Time Duration</option>
                <option value="Boolean">Boolean</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
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

        console.log(data)

        const headers = {
          "Content-Type": "application/json",
          "Authentication-Token": $cookies.get("auth_token")
        }

        await axios.post(this.store.trackerURL, data,  {
          headers: headers
          })
          // .then((response) => {
          //     $cookies.set("csrf_token", response.data.response.csrf_token)
          //     $cookies.set("auth_token", response.data.response.user.authentication_token)
          // })
          // .then(this.$router.push('/'))
          // .catch((response) => {
          //   //handle error
          //   this.errorMessage = response.response.data.response.errors[0]
          // })

      }
    }

  }
</script>