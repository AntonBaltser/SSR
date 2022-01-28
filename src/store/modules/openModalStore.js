// import VueAxios from "vue-axios";

const axios = require('axios')
// import { createApp } from 'vue'
// import App from '../../App.vue'
//
// const app = createApp(App)
// app.use(VueAxios, axios)
export default {
    actions: {
       async authLogin(){
         await axios.post('http://localhost:8080/verificationName',
              this.state.header.modal.login.fromValue
          ).then(res => {
                    console.log(res)
                  // commit('startState', res.data.header)
              })
        }
    },
//
    mutations: {

        authentification(state, login) {
            state.header.modal.login.fromValue.email = login.email
            state.header.modal.login.fromValue.password = login.password
        },
        registration(state, params){
            state.header.modal.registration.form.fileName = params.fileName
            state.header.modal.registration.form.name = params.name
            state.header.modal.registration.form.email = params.email
            state.header.modal.registration.form.password = params.password
            state.header.modal.registration.form.image_name = params.image_name
        },
        questions(state, params){
            state.header.modal.registration.form.country = params.country
            state.header.modal.registration.form.language = params.language
            state.header.modal.registration.form.gender = params.gender
        }
    },
    // state: () => ({
    state: {
        header: {
//             // buttons: '',
            modal: {
                login: {
                    fromValue: {
                        name: '',
                        password: ''
                    }
                },
                registration: {
                //     rules:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!",
                    form: {
                        name: '',
                        email: '',
                        password: '',
                        image_name: '',
                        country: '',
                        language: '',
                        gender: '',
                        fileName: ''
                    }
                },
            },
        }
    },
    // }),
    getters: {
//         rules(state){
//             return state.modal.registration.rules
//         },
//
    finalRegistration(state) {
        return state.header.modal.registration.form
    },
        loginAutrntification(state){
            return state.header.modal.login.fromValue
        },
//         stateHeaderStart(state){
//             return state.header.buttons
//         },
//         modalLoginState(state){
//             console.log(state.header.modal.login)
//             return state.header.modal.login
//         }
    }
}