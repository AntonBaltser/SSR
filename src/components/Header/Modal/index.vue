<template>
  <div class="modal fade show ">
    <div class="modal-dialog modal-dialog-centered text-center">
      <div class="modal-content justify-content-center align-items-center">

        <div class="d-flex justify-content-end w-100">
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
        ></button>
      </div>

          <LoginForm
                    v-if="stateModal.openLogin"
          />

          <RulesForm
              v-if="stateModal.openRegistration"
              @close="closeModal"
              @toRegForm="registrationForm = true"
          />
<!--        openRules = false,-->
          <RegForm
              v-if="stateFromReg.registrationForm"
              @toAnket="registrationForm = false, questionary = true"
          />
          <QuestForm
              v-if="stateFromReg.questionary"
              @close="closeModal"
          />



        </div>
      </div>
    </div>
<!--  </div>-->

</template>

<script>
import store from '../../../store'
import LoginForm from "./FormLogin";
import  RulesForm from "./FormRules";
import RegForm from "./FormReg";
import QuestForm from "./FormQuest";

export default {
  components: {
    LoginForm,
    RulesForm,
    RegForm,
    QuestForm
  },

data(){
    return {
      stateModal:  store.getters.modalState,
      // registrationForm : false,
      // questionary: false,
      stateFromReg: store.getters.modalStateFormReg
    }
  },
 methods: {
   // modalReg(){
   //   this.openRules = false
   //   this.registrationForm = true
   // },
   // regToAnket(){
   //   this.registrationForm = false
   //   this.questionary = true
   // },
    closeModal(){
      // this.$emit('close')
      store.commit('modalState', {
        penModal: false,
        openL: false,
        openR: false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  border: 1px solid #2c3e50;

  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}

</style>
