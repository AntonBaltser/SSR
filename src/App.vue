<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
components: {
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
  background-image: url('https://vue-project-ssr.s3.amazonaws.com/background.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQVKU5JSQ2GD6WACX%2F20220131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220131T192538Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=97dd089d0c8d663dae94dd0f3a4986f3c61a8064935b49ae90c3eeaed925c20e');
  background-size: cover;
}
</style>

