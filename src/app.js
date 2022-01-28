// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'

//
//
// import { createStore } from 'vuex'
// import stores from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'


import routes from "./routing/router";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App)

// const router = createRouter()




app.use(VueAxios, axios)
//
// const store = createStore({
//     stores
// })
// app.use(store)




app.provide('axios', app.config.globalProperties.axios)



const router = createRouter({

    history: createWebHistory(),
    routes,
  // store
})
app.use(router)
app.mount('#app')