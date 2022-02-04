import { createRouter } from 'vue-router'
// import MyUser from '../components/MyUser.vue'
const routes = [
    { path: '/', component: () => import('../components/start') },
    { path: '/home', component: () => import('../components/home') },

]

export default function(history) {
    return createRouter({
        history,
        routes
    })
}


// import Header from '../components/Header'
// // import ModalBase from '../components/Header/Modal'
//
// export default  [
//     {
//         path: '/',
//         name: 'main',
//         component: Header
//     },
//     {
//         path: '/auth',
//         name: 'auth',
//         component: Header
//     }
//     , {
//         path: '/registration',
//         name: 'registration',
//         component: Header
//     },
// ]