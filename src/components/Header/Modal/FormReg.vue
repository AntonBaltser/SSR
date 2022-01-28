<template>
  <form>
    <div class="form-group">
      <label for="nameReg">Ваше имя на сайте</label>
      <input
          type="text"
          class="form-control"
          id="nameReg"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          v-model="userName"
            @change="verificationName"
      >

      <small id="emailHelp1" class="form-text text-muted">Name can only contain uppercase and lowercase letters
        .</small>
    </div>

    <div class="form-group">
      <MyInputFileComponent v-model="file" @change="handleFileBlob"/>
    </div>

    <div class="form-group">
      <img :src = this.avatar alt="">
    </div>
    

    <div class="form-group">
      <label for="emailReg">Email address</label>
      <input
          type="email"
          class="form-control"
          id="emailReg"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
            @change="verificationEmail"
      >

      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password1">Password</label>
      <input
          type="password"
          class="form-control"
          id="password1"
          placeholder="Password"
          v-model="password1"

      >
      <small id="emailHelp2" class="form-text text-muted">We'll never share your email with anyone else.</small>

    </div>
    <div class="form-group">
      <label for="password2">Password2</label>
      <input
          type="password"
          class="form-control"
          id="password2"
          placeholder="Password2"
          v-model="password2"
      >
    </div>
    <button type="button" @click="nextToAnket" class="btn btn-primary">далее</button>

  </form>
</template>
<script>

import axios from "axios";
import MyInputFileComponent from '../../../components/Mixins/MyInputFileComponent'
import store from '../../../store'

export default {
  components: {
    MyInputFileComponent
  },
  // created() {
  //   return this.$store.dispatch('getInformationStart')
  // }
  // ,
  data() {

    return {
      file: "http://localhost:9000/project/registration/no-foto.png",
      userName: '',
      email: '',
      password1: '',
      password2: '',
      image: '',
      avatar: "http://localhost:9000/project/registration/no-foto.png"
    }
  },
  methods: {

    handleFileBlob(){
      console.log(this.file.name)

      const blobToBase64 = (blob, cb) => {
        const reader = new FileReader();
        reader.onload = () => {
          let dataUrl = reader.result;
          let base64 = dataUrl.split(',')[1];
          cb(base64);
        };
        reader.readAsDataURL(blob);
      };
      blobToBase64(this.file,  (base64) => { // encode
        let updateFile = {
          'blob': base64,
        };
        this.image = updateFile
      })

      this.avatar = URL.createObjectURL(new Blob([this.file]))
    },
    async verificationName() {
      try {
        const res = await axios.post('http://localhost:8080/verificationName',
            {'name': this.userName});
        console.log(res)
      } catch (e) {
        console.error(e);
      }
    },
   async verificationEmail() {
      try {
        const res = await axios.post('http://localhost:8080/verificationEmail',
            {'email': this.email});
        console.log(res)
      } catch (e) {
        console.error(e);
      }
},

async nextToAnket() {

      if (this.password1 === this.password2) {
        try {
          let nameAvatarFile = this.file?.name.split('.')
          this.fileName =  this.userName + '.' + nameAvatarFile?.[nameAvatarFile.length - 1]
          console.log(this.fileName)
          this.image['name'] = this.fileName
          const res = await axios.post('http://localhost:8080/uploadPhoto',
              this.image
          );
          console.log(res)
        } catch (e) {
          console.error(e);
        }

       await store.commit('registration', {
          'name': this.userName,
          'email': this.email,
          'password': this.password1,
          'fileName': this.fileName
        })

        this.$emit('toAnket')
      }
      else alert('Пароль не совпадаает')
    }
  }
}
</script>

<style>
img{
  width: 50px;
  height: 50px;
  background: gray;
}
</style>