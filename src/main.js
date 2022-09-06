import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import './assets/main.css'

const app = createApp(App)
const store = createPinia()

// app.use(createPinia())
app.use(store)
app.use(router)
app.use(VueCookies)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
