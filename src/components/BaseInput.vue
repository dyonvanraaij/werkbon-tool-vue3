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
      type="text"
      :name="name"
      :label="label"
      :help="help"
      :placeholder="placeholder"
  />
</template>

<style lang="scss">
.formkit-input {
  background-color: white !important;
}

.formkit-help {
  color: white !important;
}
</style>