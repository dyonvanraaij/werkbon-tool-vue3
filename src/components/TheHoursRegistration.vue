<script setup>

import BaseSelect from "@/components/Base/BaseSelect.vue";
import BaseInput from "@/components/Base/BaseInput.vue";
</script>

<template>
<div class="row">
  <div class="col-2">
    <BaseInput label="Prijs" name="prijs" placeholder="10.00" />
  </div>
  <div class="col-2">
    <BaseInput label="Aantal eenheid" name="aantal_eenheid" placeholder="1" />
  </div>
  <div class="col-2">
    <BaseSelect :options="[
            {
              label: 'Uren',
              value: 'hours'
            },
            {
              label: 'Dagen',
              value: 'days'
            },
            {
              label: 'Dagdelen',
              value: 'halfDays'
            }
            ]" label="Eenheid" name="eenheid"/>
  </div>
  <div class="col-2">
    <BaseSelect :options="[
            {
              label: 'Standaard',
              value: 'standard'
            },
            {
              label: 'Avond',
              value: 'evening'
            },
            {
              label: 'Weekend',
              value: 'weekend'
            }
            ]" label="Type" name="type"/>
  </div>
</div>
</template>

<style scoped lang="scss">

</style>