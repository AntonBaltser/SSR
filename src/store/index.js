import { createStore } from 'vuex'
import openModal from './modules/openModalStore'

export default new createStore({
    modules: {
        openModal
    }
})