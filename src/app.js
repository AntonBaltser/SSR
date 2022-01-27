// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import store from './store/'
import axios from 'axios'
import VueAxios from 'vue-axios'
import routes from "./routing/router";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App)

app.use(VueAxios, axios)
app.use(store)

app.provide('axios', app.config.globalProperties.axios)

const router = createRouter({

    history: createWebHistory(),
    routes,
})
app.use(router)
app.mount('#app')