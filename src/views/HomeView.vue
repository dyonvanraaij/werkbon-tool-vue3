<script setup>
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
</script>

<template>
  <main>
    <FormKit type="form" #default="{ value }" :actions="false">

    <div class="row">
      <div class="col-12 p-4">
        <div class="p-4">
          <BaseButton primairy-color="#54E608" secondairy-color="#54e6081a">Create</BaseButton>
        </div>
        <div class="p-4">
          <BaseButton primairy-color="#EB5252" secondairy-color="#eb52521a">Cancel</BaseButton>
        </div>
      </div>

      <div class="col-12">
        <BaseInput label="Prijs" name="prijs" placeholder="10.00" />
      </div>
      <div class="col-12">
        <BaseSelect :options="[1,2,3,4]" label="Eenheid" name="eenheid" />
      </div>
    </div>
    </FormKit>

  </main>
</template>
