import { createSSRApp } from 'vue'
// маршрутизатор для сервера использует другой режим history
import { createMemoryHistory } from 'vue-router'
import createRouter from './routing/router.js'
import App from './App.vue'

export default function () {
    const app = createSSRApp(App)
    const router = createRouter(createMemoryHistory())

    app.use(router)

    return {
        app,
        router
    }
}