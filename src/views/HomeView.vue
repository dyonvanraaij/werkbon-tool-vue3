<script setup>
import BaseButton from "@/components/Base/BaseButton.vue";
import BaseDatePicker from "@/components/Base/BaseDatePicker.vue";
import TheHoursRegistration from "@/components/TheHoursRegistration.vue";
</script>

<template>
  <main>
    <div class="row">
      <div class="col-2 p-4">
        <BaseButton primairy-color="#54E608" secondairy-color="#54e6081a">Create</BaseButton>
      </div>
      <div class="col-2 p-4">
        <BaseButton primairy-color="#EB5252" secondairy-color="#eb52521a">Cancel</BaseButton>
      </div>
      <div class="col-4 p-4">
        <BaseDatePicker label="Datum" name="date"/>
      </div>
    </div>

    <br/>
    <br/>
    <br/>

    <TheHoursRegistration/>
  </main>
</template>
