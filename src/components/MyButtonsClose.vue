<template>
<div class="d-flex justify-content-end w-100">
  <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
      @click="exitSession"
  ></button>

</div>
</template>


<script>

import axios from 'axios'
export default {
methods: {
  exitSession(){
    axios.get('/exit')
        .then(res => {
          console.log(res)
        }).catch(err => {
      console.log(err);
    })
  }
}
}
</script>