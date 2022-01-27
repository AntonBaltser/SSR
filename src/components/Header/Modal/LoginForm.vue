
<template>

  <form>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"

      >
<!--      @change="loginStore"-->
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"

      >
<!--      @change="loginStore"-->
    </div>
<!--    <button type="button" @click="finalRegistration1" class="btn btn-primary">Войти</button>-->
  </form>


</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed:{
  //   loginStore(){
  //     return this.$store.commit('authentification',{
  //       'email': this.email,
  //       'password': this.password
  //     });
  //   }
  // },
  methods: {
    // async finalRegistration1() {
    //   try {
    //     const res = await axios.post(`http://localhost:4000/auth`,
    //         this.$store.getters.loginAutrntification, {withCredentials: true}
    //     );
    //     console.log(res)
    //   } catch (e) {
    //     console.error(e);
    //   }
    }
  }
}
</script>