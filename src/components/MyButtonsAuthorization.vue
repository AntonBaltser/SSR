<template>
  <div class="header">
    <div class="user-page" id="modalBase">
      <button
          id="loginBtn"
          type="button"
          class="btn btn-primary"
          @click="reaction(true, true, false)"
      >Войти</button>

      <button
          id="regBtn"
          class="btn btn-secondary"
          type="button"
          @click="reaction(true, false, true)"
      >Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>

import store from '../store'

export default {
  data(){
   return {
     openModal: '',
     openL: '',
     openR: ''
   }

  },
methods: {
    reaction(openModal, openL, openR){
      store.commit('modalState',{
       openModal: openModal,
       openL: openL,
       openR: openR
     })
    }
  }

}

</script>

<style>
.btn{
  margin:  5vh 10px;
}
</style>