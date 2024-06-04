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
  },
  options: {
    type: Array,
    default: {},
    required: true
  }
})

</script>

<template>
  <FormKit
      type="dropdown"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      popover
      :options="options"
  />
</template>

<style lang="scss">
.formkit-selector {
  background-color: white !important;
}

.formkit-help {
  color: white !important;
}

.formkit-dropdown-wrapper {
  border-color: #DBDBDB !important;
}
.formkit-outer {
  border-color: #DBDBDB !important;
}
</style>