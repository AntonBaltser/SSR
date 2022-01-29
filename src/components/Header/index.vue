<template>
    <div class="header">
      <div class="user-page" id="modalBase">
        <button
            id="loginBtn"
            type="button"
            class="btn btn-primary"
            @click="openModal = true, openL = true"
        >Войти</button>

      <button
          id="regBtn"
          class="btn btn-secondary"
          type="button"
          @click="openModal = true, openR = true"
      >Зарегистрироваться</button>
    </div>
    </div>
  <ModalBase
      @close="openModal = false, openL = false, openR = false "
      v-if="openModal"
      :openLog = "openL"
      :openReg = "openR"
  />

</template>

<script>

import ModalBase from "./Modal"

export default {
  components: {
    ModalBase,
  },
  data(){
    return{
      stateParams: '',
      openModal: false,
      openL: false,
      openR: false
    }
  },

}

</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: flex-end;
  position: relative;
  background: #d49fa7;
  padding: 5px;
  right: 0;
  width: 100%;
  height: 100px;
}
.btn{
/*  height: 5vh;*/
/*  line-height: 5vh;*/
/*  padding: 0 1rem;*/
  margin:  5vh 10px;
}

</style>
