<script setup>
defineProps({
  primairyColor: {
    type: String,
    default: "green"
  },
  secondairyColor: {
    type: String,
    default: "lightGreen"
  }
})
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border: solid 2px v-bind(primairyColor);
  color: v-bind(primairyColor);

  &:hover {
    background-color: v-bind(secondairyColor);
  }
}

</style>