<template>
  <router-view></router-view>
  <Container/>
</template>

<script>
import Container from './components/content/Container'
export default {
  name: 'App',
components: {
    Container
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}
.body-bg {
  background-image: url('http://localhost:9000/project/background/background.jpg');
  background-size: cover;
}
</style>

