import { createStore } from 'vuex'
import openModalStore from './modules/openModalStore'

export default new createStore({
    modules: {
        openModalStore
    }
})