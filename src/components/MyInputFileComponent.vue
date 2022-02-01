<template>

  <input type="file" @change="onChangeFile" name="file" />

</template>

<script>
export default {
  methods: {
    onChangeFile(event) {
      this.$emit('update:modelValue', event.target.files[0])
    }
  }
}
</script>