
<template>

<!--    <div class="modal-dialog modal-dialog-centered text-center">-->
<!--      <div class="modal-content justify-content-center align-items-center">-->
  <form class="col-8">
  <img class="m-4" src="http://192.168.1.72:9000/project/registration/users/dsf.jpg" alt="" width="72" height="57">
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