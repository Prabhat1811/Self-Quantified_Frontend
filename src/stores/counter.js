import { defineStore } from 'pinia'

export const myStore = defineStore({
  id: 'store',
  state: () => ({
    baseURL: "http://127.0.0.1:8000",
    authToken: ""
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})
