<template>

<header>
  <ButtonClose/>
  </header>
<Container/>
</template>

<script>
import ButtonClose from '../MyButtonsClose'
// import Header from '../Header'
import Container from "../content/Container";

export default {
  components: {
    Container,
    // Header,
    ButtonClose
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
