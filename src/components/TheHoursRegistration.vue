<script setup>
import {ref} from "vue";
import BaseHoursRegistrationForm from "@/components/BaseHoursRegistrationForm.vue";

const components = ref([{}]); // Start met één component

const addComponent = () => {
  components.value.push({});
};

const removeComponent = (index) => {
  components.value.splice(index, 1);
};
</script>

<template>
  <div>
    <div class="container" v-for="(component, index) in components" :key="index">
      <div class="wrapper">
        <div class="row">
          <div class="col-11">
            <BaseHoursRegistrationForm/>
          </div>
          <div class="col-1">
            <img v-if="index !== 0" height="25px" @click="removeComponent(index)" class="icon"
                                  src="../assets/cross.svg" alt="Delete">
            <img v-if="index === 0" height="30px" @click="addComponent" class="icon" src="../assets/plus.svg"
                 alt="Add">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  background-color: #383C40;
  padding: 20px;
  border-radius: 5px;
}

.icon {
  position: relative;
  top: 30px;
  cursor: pointer;
}
</style>