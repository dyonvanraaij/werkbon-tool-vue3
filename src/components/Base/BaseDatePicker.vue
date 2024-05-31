<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  help: {
    type: String,
    default: "",
    required: false
  },
  placeholder: {
    type: String,
    default: "",
    required: false
  }
})

</script>

<template>
  <FormKit
      type="datepicker"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      :help="help"
      overlay
      popover
  />
</template>

<style scoped lang="scss">

</style>