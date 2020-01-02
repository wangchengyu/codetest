<template>
  <div>
    <NoData v-if="!Object.keys(grades).length"/>
    <div v-for="(key, index) in Object.keys(grades)" :key="index" :class="box">
      <span class="grade">{{ key }} <small> (the owner's grade) </small></span>
      <PetNames :pets="grades[key]">
      </PetNames>
    </div>
  </div>
</template>

<script>
import PetNames from "@/components/PetNames"
import NoData from "@/components/NoData"

export default {
  name: 'PetOwnerGrade',

  components: { PetNames, NoData },

  props: ['grades']
}
</script>

<style scoped>
.grade {
    font-size: 16px;
    font-style: bold;
}
</style>