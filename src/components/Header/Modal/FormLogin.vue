
<template>

<!--    <div class="modal-dialog modal-dialog-centered text-center">-->
<!--      <div class="modal-content justify-content-center align-items-center">-->
  <form class="col-8">
  <img class="m-4" src="https://vue-project-ssr.s3.us-east-1.amazonaws.com/200px-Flag_of_Germany_%28state%29.svg.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEAp%2B9ce8y3tC5Nuvh9zLluXEwthz18KOR2PzgAuQoCeFACIQDoFNqt2rCpvlOlKXxBpCzpwj9Gd1lE9qKezF%2BrT3yrIirkAgg2EAAaDDA0NTgxMjEwODQ0OSIMRA3Y3hHC8b327DxHKsEC01Zth2zPS2krMV2XDEfIuJVCoYo3BFnypAK9F3%2FELCuGlvbTXn6vBqO2odlvI3nXFWkBHwnCf%2FCoX9p7Q2R%2BdPCPvhFh6JAvjQtwkQA5jlMAsXfNQZA5CfoEPNDA88x2qwmdJQZG3H%2FxvzfQ6dh62vS2gmxhjfTp4TmT%2F2W%2FfI9fEkMAG40Uww2KXz7Nz5fVoeu7ONtk5DGhRqGTIeQR8T5KJrHEX%2Br3kci0ebdjC4veqvuxudOoNz4gY3ictdauoWnIa7Ooqdxy%2FVvqvs4AqK%2FgXzjsZ6zw5T6agOIEaaAb3%2B3oE5YlY0xPMOup6ywg%2FfsTS4ur7JLH6uSSh9LWEkFdAyL5OhlxVkrE1JIwY6zw2gAYeeTphhsfoSRu4%2BX4kpMKMW5RD2oh3CvmnVWVZh8IGgb9MZcSwhT5MHQOyYV2MMuZ4Y8GOrICBvs4%2BQTBI3wM2bXZnSVPWRkEwHIvh6qKO%2F7x635fXRslS3rqzjrxzRBIIL8C98frZrc2YEUzgmTcfA1ZI7Wt2aRZXgLuhQbReRtxxiANn4yrVt%2F3%2Bnw0Cxeumx9FA9h13i2VW42cjGcg9dLj%2FHz5sOn1MCiTm7BJdVOH2jmaNjtdZnf%2ByUmjITtU2xm5wnjhMuk8AxARZJZPKxecPQdrLp3EM%2BRYxbIkGHuftGrkFvO2B6S91NRZ2Pc4ApmEEa%2BIaQCGPsG3S6jXRHlFJwQKvKDrcmsW%2F10RQYKKsd9Isc7zP5hjtvP0A4B1UGNQD8YFhxvCyGKcEN1sFWkBK%2FVG3KTiczuh0ljwqy5jepWtTaNzb2HhgqKGtsR%2FPIrMZAzYiHRpBCQQ612S3%2BQbbw66%2Bbxo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220131T220018Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIAQVKU5JSQYSWLI37Z%2F20220131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b5d224c0893cdf32271c8c8e2719f3ff8c47d241ee33cb5dbc2d6b7d56c9117" alt="" width="72" height="57">
  <h1 class="h3 mb-3 fw-normal">Please sign in</h1>


  <div class="form-floating mb-2">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" @change="loginToStore">
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" @change="loginToStore">
    <label for="floatingPassword">Password</label>
  </div>

  <button class="w-70 btn btn-lg btn-primary"
          @click="finalRegistration1"
          type="button"
  >Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
  </form>


</template>

<script>
import axios from "axios";
import store from '../../../store/'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed:{
    loginToStore(){
      console.log(this.email, this.password)
      return store.commit('authentification',{
        'email': this.email,
        'password': this.password
      });
    }
  },
  methods: {

    async finalRegistration1() {
      try {
        const res = await axios.post(`https://damp-brook-60565.herokuapp.com/auth`,
            store.getters.loginAutrntification, {withCredentials: true}
        );
        console.log(res)
        console.log("ура регистарция")
      } catch (e) {
        console.error(e);
      }
    }
  }
}
</script>


<style>
input{
  text-align: center;
}
</style>