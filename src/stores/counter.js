import { defineStore } from 'pinia'

export const myStore = defineStore({
  id: 'store',
  state: () => ({
    baseURL: "http://127.0.0.1:8000",
    trackerURL: "http://127.0.0.1:8000/api/tracker",
    authToken: "",
    isLoggedIn: ($cookies.get("is_logged_in") === null) ? (false) : ($cookies.get("is_logged_in")),
    trackers: []
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
    updateTrackers(value){
      Object.assign(this.trackers, value)
    },
    logIn(){
      Object.assign(this.isLoggedIn, true)
    },
    logOut(){
      Object.assign(this.isLoggedIn, false)
    }

  }
})