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
          @click="agreement "
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
import ScrollHandler from "../../Mixins/ScrollHandler";
export default {
  mixins: [ScrollHandler],
  data(){
    return {
      isRegaleReaded: false,
      isRegaleChecked: false,
      rule: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis delectus dicta eaque facere inventore magni, natus nostrum numquam, odio possimus quaerat quia quidem quis repellat, repudiandae tempora velit voluptatem!"
    }
  },
  methods:{
    onScrollEnd(){
      this.isRegaleReaded = true
    },
    agreement(){
      this.$emit('toRegForm')
    },
    closeRegal(){
      this.$emit('close')
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