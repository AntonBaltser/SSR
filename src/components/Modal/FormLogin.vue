
<template>

<!--    <div class="modal-dialog modal-dialog-centered text-center">-->
<!--      <div class="modal-content justify-content-center align-items-center">-->
  <form class="col-8">
  <img class="m-4" src="https://vue-project-ssr.s3.amazonaws.com/deutsch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQVKU5JSQ2GD6WACX%2F20220201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220201T184437Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=07c1a3b11f8dc0dc8ee748ce51d359bf271ebfc172ea998d9618c894b456ff8e" alt="">
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
import store from '../../store'

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
        const res = await axios.post(`http://localhost:8080/auth`,
            store.getters.loginAutrntification, {withCredentials: true}
        );
        if(res.data === "no_login") alert('login или пароль не совпали')
        else{
        await this.$router.push('./home')
          console.log(res)
        }
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