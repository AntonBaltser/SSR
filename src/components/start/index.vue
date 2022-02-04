<template>
<header>
  <MyButtonsAuthorization/>
</header>

  <Modal
      v-if="stateModalBase.state"
  />
  <Container/>
</template>

<script>
import MyButtonsAuthorization from '../MyButtonsAuthorization'
// import Header from '../Header'
import Modal from '../Modal'
import Container from "../content/Container";
import store from "../../store";

export default {
  components: {
    MyButtonsAuthorization,
    // Header,
    Modal,
    Container
  },
  data() {

    return {
      stateModalBase: store.getters.modalState
    }
}
}
</script>

<style lang="scss" scoped>
header{
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
