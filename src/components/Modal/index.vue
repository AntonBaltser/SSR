<template>
  <div class="modal fade show ">
    <div class="modal-dialog modal-dialog-centered text-center">
      <div class="modal-content justify-content-center align-items-center">
          <MyButtonsClose
              @click="closeModal"
          />
          <LoginForm
              v-if="stateModal.formLogin"
          />
          <RulesForm
              v-if="stateModal.formReg.openRules"
              @close="closeModal"
          />
          <RegForm
              v-if="stateModal.formReg.openFormReg"
          />
          <QuestForm
              v-if="stateModal.formReg.openFormQuest"
              @close="closeModal"
          />
        </div>
      </div>
    </div>
</template>

<script>
import store from '../../store'
import LoginForm from "./FormLogin";
import  RulesForm from "./FormRules";
import RegForm from "./FormReg";
import QuestForm from "./FormQuest";
import MyButtonsClose from "../MyButtonsClose";

export default {
  components: {
    LoginForm,
    RulesForm,
    RegForm,
    QuestForm,
    MyButtonsClose
  },
data(){
    return {
      stateModal:  store.getters.modalState,
    }
  },
 methods: {
    closeModal(){
      store.commit('modalState', {
        penModal: false,
        openL: false,
        openR: false
      })
      store.commit('formRegState', {
        rulesForm: false,
        regForm: false,
        questForm: false
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
