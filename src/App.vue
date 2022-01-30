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
  background-image: url('https://vue-project-ssr.s3.us-east-1.amazonaws.com/background.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD42UlSQA9tgQOW1BexWih%2F96u36YLEl%2FwbO6%2BnlmdEIQIhAJ34MRydSl7LK9oz%2Fbjn6NPJH6X3QaIqnyqBzGQE%2F5b4KuQCCB0QABoMMDQ1ODEyMTA4NDQ5Igzz6Vt4vvQxrA%2FOTnQqwQJ3mWElLKis9K4hCdieszPPX37IR8bISaUa8whRqequI5cBx39T3QpiozWXWLU%2FXZTsnfjF%2BEp29EdXdvs0eBR4jZAEgkzyOB13yIIiMSzX%2F3dB8zCzf9lp3Cn5vqQSFwLaF03c9zuHuDWfhyPY5UnHRmcT2On1V%2FbWJOc1syeZXhZW3DtTusspbuJ8VvxMQSNQwUmsIP44OO5at5GIyxCevh1YFbDWezMPH2f3UTnlQ1ykGSPUZ3lutFa9Jhk2eb24PqB85%2B7SaGwvyBg7nWlDzaU%2FGxC1hmp5At6WCJeDFwV00ufFE64zbcfZ6ff%2FlwVqtewFSu97FL%2FHXDipqvoSsNDNapYvCVkHlyX6vmmmXYvDcaSTXopnCbcjkg%2FqBcfi3AcxJSXMXUvdSkJ9LDcYCaPn3cDc2uClOhkc7qxz07gwrZ3bjwY6sgKrSV2zhPA8XTFrHbRRMqnSLOSsIKAwDwqidLLVCy7NeTtVcQZ%2F2NC18n37pQ0kC9%2FYdqc3EiiGipVdyM8AP7EEK5wTFZ3lkZMtMDjoEQmFRVEumBuBLyxO3WDfU5UaTLvNFGW0HkeVyHXfMs1KwKYnV4Qw69O2d19VooOcSt6FEsHHGX9FF0siJtU6PVCxXg0Dv4QO1C9fsuRY7Ox1Nc%2BwcmhL2SJj%2FevMHwY1PzifX%2FyFFbAVCkrXzJLFf11wyaydfbZmosX4eS%2FnVo7t5Y9SaPy2Ebh1mPR3rsti83FiQ5uuCIiluJWR16xrBhXGv%2BeGXiUx8AgrqiO%2FB8YUFbLueGk9gSSkWyo2A4GcI3sWcK1sP7pzydTnlmNuvsW0APLlap%2B1EBKsFRMEH8SkdPFDE1I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220130T194938Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604799&X-Amz-Credential=ASIAQVKU5JSQXDZUOM5U%2F20220130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bd0ce772fcd7af913eeccd18e09d4e75c89faa465bf450f7f43f4d653598d1ec');
  background-size: cover;
}
</style>

