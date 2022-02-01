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
     openModal: Boolean,
     openL: Boolean,
     openR: Boolean
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
  /*  height: 5vh;*/
  /*  line-height: 5vh;*/
  /*  padding: 0 1rem;*/
  margin:  5vh 10px;
}
</style>