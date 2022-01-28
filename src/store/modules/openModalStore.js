// // const axios = require('axios')
//
export default {
    actions:{
//         // getInformationStart({ commit }){
//         //   axios.get('http://localhost:4000/')
//         //       .then(res => {
//         //
//         //           commit('startState', res.data.header)
//         //       })
//         // }
    },
//
    mutations: {
//         // startState(state, res){
//         //     console.log(res)
//         //    state.header = res
//         },
        authentification(state, login) {
                state.modal.login.fromValue.email = login.email
                state.modal.login.fromValue.password = login.password
        },
//         registration(state, params){
//             state.modal.registration.form.fileName = params.fileName
//             state.modal.registration.form.name = params.name
//             state.modal.registration.form.email = params.email
//             state.modal.registration.form.password = params.password
//             state.modal.registration.form.image_name = params.image_name
//         },
//         questions(state, params){
//             state.modal.registration.form.country = params.country
//             state.modal.registration.form.language = params.language
//             state.modal.registration.form.gender = params.gender
//         }
    },
    state:{
        header: {
//             // buttons: '',
            modal:{
                login: {
                    fromValue: {
                        name: '',
                        password: ''
                    }
//                 // },
//                 // registration: {
//                 //     rules:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!",
//                 //     form: {
//                 //         name: '',
//                 //         email: '',
//                 //         password: '',
//                 //         image_name: '',
//                 //         country: '',
//                 //         language: '',
//                 //         gender: '',
//                 //         fileName: ''
//                 //     },
                },
            }
        }
    },
    getters:{
//         rules(state){
//             return state.modal.registration.rules
//         },
//
//     finalRegistration(state) {
//         return state.modal.registration.form
//     },
//         loginAutrntification(state){
//             return state.modal.login.fromValue
//         },
//         stateHeaderStart(state){
//             return state.header.buttons
//         },
//         modalLoginState(state){
//             console.log(state.header.modal.login)
//             return state.header.modal.login
//         }
}
}