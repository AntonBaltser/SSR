
// const axios = require('axios')

export default {
    // actions: {
    //    async autoB( {commit} ){
    //      await axios.post('http://localhost:8080/state'
    //       ).then(res => {
    //                 console.log(res)
    //               commit('startState', res)
    //           })
    //     },
    // },
//
    mutations: {
        modalState(state, modal){
            state.header.buttons.openModal = modal.openModal | true;
            state.header.buttons.openLogin = modal.openL;
            state.header.buttons.openRegistration = modal.openR;

        },
        formRegState(state, stateForm){
            state.header.modal.stateForm.registrationForm = stateForm.rulesForm;
            state.header.modal.stateForm.questionary = stateForm.regForm;
        },
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
    state: () => ({
        header: {
            buttons: {
                openModal: false,
                openRegistration: false,
                openLogin: false
            },
            modal: {
                stateForm:{
                    registrationForm: false,
                    questionary: false
                },
                login: {
                    fromValue: {
                        name: '',
                        password: ''
                    }
                },
                registration: {
                    rules:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!",
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
    }),
    getters: {
        modalState(state){
            return state.header.buttons
        },
        modalStateFormReg(state){
            return state.header.modal.stateForm
        },
    finalRegistration(state) {
        return state.header.modal.registration.form
    },
        loginAutrntification(state){
            return state.header.modal.login.fromValue
        },
        rules(state){
            return state.header.modal.registration.rules
        },
//         modalLoginState(state){
//             console.log(state.header.modal.login)
//             return state.header.modal.login
//         }
    }
}