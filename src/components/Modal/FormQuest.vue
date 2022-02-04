<template>
<form >
<div class="form-group">
  <label for="country">родной язык</label>
  <select
      class="form-control"
      id="country"
      v-model="countrySelected"
      @change="commitAnket"
  >

    <option>русский</option>
    <option>немецкий</option>
    <option>англиский</option>
  </select>
</div>
  <div class="form-group">
  <label for="language">изучаемый язык язык</label>
  <select
      class="form-control"
      id="language"
      v-model="languageSelected"
      @change="commitAnket"
  >

    <option>русский</option>
    <option>немецкий</option>
    <option>англиский</option>
  </select>
</div>
  <div class="form-group"> <p>Ввыберите пол: </p>
  <div class="form-check-inline">
    <label class="form-check-label">
      <input
          type="radio"
          v-model="gender"
          class="form-check-input"
          value="male"
          @change="commitAnket"
      >Мужской

    </label>
  </div>
  <div class="form-check-inline">
    <label class="form-check-label">
      <input
          type="radio"
          v-model="gender"
          class="form-check-input"
          value="female"
          @change="commitAnket"
      >Женский

    </label>
  </div>
  </div>
  <button
      type="button"
      class="btn btn-primary"
    @click="finalRegistration1"
  >Зарегистрировать</button>

</form>

</template>

<script>


import axios from "axios";
import store from '../../store'

export default {
  data() {
    return {
      countrySelected: '',
      languageSelected: '',
      gender: ''
    }
  },
  computed:{
    commitAnket() {
      return store.commit('questions', {
        'country': this.countrySelected,
        'language': this.languageSelected,
        'gender': this.gender

      })
    },
  },
  methods: {
//
 async finalRegistration1() {
      try {
        const res = await axios.post('http://localhost:8080/registration',
            store.getters.finalRegistration);
        await this.$router.push('/home')
        console.log(res)
      } catch (e) {
        console.error(e);
      }
    }
//
  }
}
</script>