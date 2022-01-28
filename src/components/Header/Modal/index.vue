<template>
  <div class="modal fade show ">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <LoginForm
                    v-if="openLog"
          />

          <RulesForm
              v-if="openRules"
              @close="closeModal"
              @toRegForm="modalReg"
          />

          <RegForm
              v-if="registrationForm"
              @toAnket="regToAnket"
          />
          <QuestForm
              v-if="questionary"
              @close="closeModal"
          />

          <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
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
  props:      {
    openLog: Boolean,
    openReg: Boolean
  },
data(){
    return {
      openRules: this.$props.openReg,
      registrationForm : false,
      questionary: false,
    }
  },
 methods: {
   modalReg(){
     this.openRules = false
     this.registrationForm = true
   },
   regToAnket(){
     this.registrationForm = false
     this.questionary = true
   },
    closeModal(){
      this.$emit('close')
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
