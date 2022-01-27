<template>
<form >
<div class="form-group">
  <label for="country">родной язык</label>
  <select class="form-control" id="country" v-model="countrySelected">
<!--    @change="commitingAnket"-->
    <option>русский</option>
    <option>немецкий</option>
    <option>англиский</option>
  </select>
</div>
  <div class="form-group">
  <label for="language">изучаемый язык язык</label>
  <select class="form-control"  id="language" v-model="languageSelected">
<!--    @change="commitingAnket"-->
    <option>русский</option>
    <option>немецкий</option>
    <option>англиский</option>
  </select>
</div>
  <div class="form-group"> <p>Ввыберите пол: </p>
  <div class="form-check-inline">
    <label class="form-check-label">
      <input type="radio" v-model="gender"  class="form-check-input" value="male">Мужской
<!--      @change="commitingAnket"-->
    </label>
  </div>
  <div class="form-check-inline">
    <label class="form-check-label">
      <input type="radio" v-model="gender"  class="form-check-input" value="female">Женский
<!--      @change="commitingAnket"-->
    </label>
  </div>
  </div>
  <button type="button"  class="btn btn-primary">Зарегистрировать</button>
<!--  @click="finalRegistration1"-->
</form>

</template>

<script>


// import axios from "axios";

export default {
  data() {
    return {
      countrySelected: '',
      languageSelected: '',
      gender: ''
    }
  },
  computed:{
    // commitingAnket() {
    //   return this.$store.commit('questions', {
    //     'country': this.countrySelected,
    //     'gender': this.gender,
    //     'language': this.languageSelected
    //   })
    // },
  },
  methods: {

    // async finalRegistration1() {
    //   try {
    //     const res = await axios.post('http://localhost:4000/registration',
    //         this.$store.getters.finalRegistration);
    //     console.log(res)
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }

  }
}
</script>