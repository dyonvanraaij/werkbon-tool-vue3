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
      value-format="YYYY-MM-DD"
      format="DD-MM-YYYY"
      clearable
      :classes="{
        inner: 'formkit-datepicker-inner',
      }"
  />
</template>

<style lang="scss">
.formkit-inner,
.formkit-input {
  color: black !important;
}

.formkit-calendar-icon,
.formkit-clear-icon,
.formkit-open-button,
.formkit-remove-selection,
.formkit-listbox-button,
.formkit-open-button {
  background-color: white !important;
}
</style>