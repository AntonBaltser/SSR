<template>
  <div class="form-group">
    <div class="information" @scroll="onScroll">
      <p>{{ rule }}</p>
  </div>


    <div class="form-check">
      <input
          type="checkbox"
          :value="isRegaleChecked"
          v-model="isRegaleChecked"
          class="form-check-input"
          id="regaleCheck"
      >
      <label class="form-check-label" for="regaleCheck">Подтвердить прочитку</label>
    </div>


    <div class="footer" >

      <button
          class="btn btn-primary"
          type="button"
          :disabled="!isRegaleReaded || !isRegaleChecked"
          @click="toFormReg"
      >Согласится</button>

      <button
          class="btn btn-secondary"
          type="button"
          @click="closeRegal"
      >Отказаться</button>
    </div>

</div>
</template>

<script>
import store from '../../store'
import ScrollHandler from "../Mixins/ScrollHandler"

export default {
  mixins: [ScrollHandler],
  data(){
    return {
      isRegaleReaded: false,
      isRegaleChecked: false,
      rule: store.getters.rules
    }
  },
  methods:{
    onScrollEnd(){
      this.isRegaleReaded = true
    },
    toFormReg(){
      // this.$emit('toRegForm')
      store.commit('formRegState', {
          rulesForm: false,
          regForm: true,
        questForm: false
      })
    },
    closeRegal(){
      this.$emit('close')
      // store.commit('modalState', {
      //   penModal: false,
      //   openL: false,
      //   openR: false
      // })
    }
  }
}

</script>


<style lang="scss" scoped>
.information{
  padding: 1rem;
  max-height: 220px;
  overflow-y: auto;
border: 1px solid gray}
.btn{
  /*  height: 5vh;*/
  /*  line-height: 5vh;*/
  /*  padding: 0 1rem;*/
  margin:  5vh 10px;
}

</style>