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
      <img :src = this.avatar class="img-thumbnail rounded-circle mt-3 mb-3" alt="">
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
import MyInputFileComponent from '../MyInputFileComponent'
import store from '../../store'

export default {
  components: {
    MyInputFileComponent
  },
  data() {

    return {
      file: "no_foto",
      userName: '',
      email: '',
      password1: '',
      password2: '',
      image: '',
      avatar: 'https://vue-project-ssr.s3.amazonaws.com/users/no-foto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQVKU5JSQ2GD6WACX%2F20220131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220131T195023Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f1908507b877930afdcd4444611ab92eb6d89bd8d182c976ac50b5f43444402'
    }
  },
  methods: {

    handleFileBlob(){

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
        if(!res.data) alert('Данное имя уже существует')
      } catch (e) {
        console.error(e);
      }
    },
   async verificationEmail() {
      try {
        const res = await axios.post('http://localhost:8080/verificationEmail',
            {'email': this.email});
        console.log(res)
        if(!res.data) alert('Данное Email уже существует')
      } catch (e) {
        console.error(e);
      }
},

async nextToAnket() {
console.log('function to article')
      if (this.password1 === this.password2) {

          let nameAvatarFile = this.file?.name.split('.')
          this.fileName =  this.userName + '.' + nameAvatarFile?.[nameAvatarFile.length - 1]
          console.log(this.fileName)
          this.image['name'] = this.fileName
         await axios.post('http://localhost:8080/uploadPhoto',
              this.image
          ).then(res => {
          console.log(res)
        }).catch(err => {
              // what now?
              console.log(err);
            })
        await store.commit('registration', {
          'name': this.userName,
          'email': this.email,
          'password': this.password1,
          'fileName': this.fileName
        })

        // await this.$emit('toAnket')
        await store.commit('formRegState',{
          rulesForm: false,
          regForm: false,
          questForm: true
        })
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