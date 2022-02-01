<template>
  <MyButtonsAuthorization/>
  <ModalBase
      v-if="stateModalBase.openModal"
  />
</template>

<script>
import store from '../../store'
import MyButtonsAuthorization from "../MyButtonsAuthorization";
import ModalBase from "./Modal"

export default {
  components: {
    ModalBase,
    MyButtonsAuthorization
  },
  data(){
    return{
      stateModalBase: store.getters.modalState
      // openModal: false,
      // openL: false,
      // openR: false
    }
  },

}

</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: flex-end;
  position: relative;
  background: #ab5f35;
  padding: 5px;
  right: 0;
  width: 100%;
  height: 100px;
}


</style>
