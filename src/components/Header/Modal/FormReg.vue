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
      file: "https://vue-project-ssr.s3.us-east-1.amazonaws.com/no-foto.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD42UlSQA9tgQOW1BexWih%2F96u36YLEl%2FwbO6%2BnlmdEIQIhAJ34MRydSl7LK9oz%2Fbjn6NPJH6X3QaIqnyqBzGQE%2F5b4KuQCCB0QABoMMDQ1ODEyMTA4NDQ5Igzz6Vt4vvQxrA%2FOTnQqwQJ3mWElLKis9K4hCdieszPPX37IR8bISaUa8whRqequI5cBx39T3QpiozWXWLU%2FXZTsnfjF%2BEp29EdXdvs0eBR4jZAEgkzyOB13yIIiMSzX%2F3dB8zCzf9lp3Cn5vqQSFwLaF03c9zuHuDWfhyPY5UnHRmcT2On1V%2FbWJOc1syeZXhZW3DtTusspbuJ8VvxMQSNQwUmsIP44OO5at5GIyxCevh1YFbDWezMPH2f3UTnlQ1ykGSPUZ3lutFa9Jhk2eb24PqB85%2B7SaGwvyBg7nWlDzaU%2FGxC1hmp5At6WCJeDFwV00ufFE64zbcfZ6ff%2FlwVqtewFSu97FL%2FHXDipqvoSsNDNapYvCVkHlyX6vmmmXYvDcaSTXopnCbcjkg%2FqBcfi3AcxJSXMXUvdSkJ9LDcYCaPn3cDc2uClOhkc7qxz07gwrZ3bjwY6sgKrSV2zhPA8XTFrHbRRMqnSLOSsIKAwDwqidLLVCy7NeTtVcQZ%2F2NC18n37pQ0kC9%2FYdqc3EiiGipVdyM8AP7EEK5wTFZ3lkZMtMDjoEQmFRVEumBuBLyxO3WDfU5UaTLvNFGW0HkeVyHXfMs1KwKYnV4Qw69O2d19VooOcSt6FEsHHGX9FF0siJtU6PVCxXg0Dv4QO1C9fsuRY7Ox1Nc%2BwcmhL2SJj%2FevMHwY1PzifX%2FyFFbAVCkrXzJLFf11wyaydfbZmosX4eS%2FnVo7t5Y9SaPy2Ebh1mPR3rsti83FiQ5uuCIiluJWR16xrBhXGv%2BeGXiUx8AgrqiO%2FB8YUFbLueGk9gSSkWyo2A4GcI3sWcK1sP7pzydTnlmNuvsW0APLlap%2B1EBKsFRMEH8SkdPFDE1I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220130T195538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIAQVKU5JSQXDZUOM5U%2F20220130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52cb9c83205f239a8b8742c4844be1199ee1eb65c7b71aa11b92d01dcdddf377",
      userName: '',
      email: '',
      password1: '',
      password2: '',
      image: '',
      avatar: "https://vue-project-ssr.s3.us-east-1.amazonaws.com/no-foto.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD42UlSQA9tgQOW1BexWih%2F96u36YLEl%2FwbO6%2BnlmdEIQIhAJ34MRydSl7LK9oz%2Fbjn6NPJH6X3QaIqnyqBzGQE%2F5b4KuQCCB0QABoMMDQ1ODEyMTA4NDQ5Igzz6Vt4vvQxrA%2FOTnQqwQJ3mWElLKis9K4hCdieszPPX37IR8bISaUa8whRqequI5cBx39T3QpiozWXWLU%2FXZTsnfjF%2BEp29EdXdvs0eBR4jZAEgkzyOB13yIIiMSzX%2F3dB8zCzf9lp3Cn5vqQSFwLaF03c9zuHuDWfhyPY5UnHRmcT2On1V%2FbWJOc1syeZXhZW3DtTusspbuJ8VvxMQSNQwUmsIP44OO5at5GIyxCevh1YFbDWezMPH2f3UTnlQ1ykGSPUZ3lutFa9Jhk2eb24PqB85%2B7SaGwvyBg7nWlDzaU%2FGxC1hmp5At6WCJeDFwV00ufFE64zbcfZ6ff%2FlwVqtewFSu97FL%2FHXDipqvoSsNDNapYvCVkHlyX6vmmmXYvDcaSTXopnCbcjkg%2FqBcfi3AcxJSXMXUvdSkJ9LDcYCaPn3cDc2uClOhkc7qxz07gwrZ3bjwY6sgKrSV2zhPA8XTFrHbRRMqnSLOSsIKAwDwqidLLVCy7NeTtVcQZ%2F2NC18n37pQ0kC9%2FYdqc3EiiGipVdyM8AP7EEK5wTFZ3lkZMtMDjoEQmFRVEumBuBLyxO3WDfU5UaTLvNFGW0HkeVyHXfMs1KwKYnV4Qw69O2d19VooOcSt6FEsHHGX9FF0siJtU6PVCxXg0Dv4QO1C9fsuRY7Ox1Nc%2BwcmhL2SJj%2FevMHwY1PzifX%2FyFFbAVCkrXzJLFf11wyaydfbZmosX4eS%2FnVo7t5Y9SaPy2Ebh1mPR3rsti83FiQ5uuCIiluJWR16xrBhXGv%2BeGXiUx8AgrqiO%2FB8YUFbLueGk9gSSkWyo2A4GcI3sWcK1sP7pzydTnlmNuvsW0APLlap%2B1EBKsFRMEH8SkdPFDE1I%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220130T195538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=ASIAQVKU5JSQXDZUOM5U%2F20220130%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52cb9c83205f239a8b8742c4844be1199ee1eb65c7b71aa11b92d01dcdddf377"
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
        const res = await axios.post('https://damp-brook-60565.herokuapp.com/verificationName',
            {'name': this.userName});
        console.log(res)
      } catch (e) {
        console.error(e);
      }
    },
   async verificationEmail() {
      try {
        const res = await axios.post('https://damp-brook-60565.herokuapp.com/verificationEmail',
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
          const res = await axios.post('https://damp-brook-60565.herokuapp.com/uploadPhoto',
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