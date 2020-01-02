<template>
  <div>
    <NoData v-if="!Object.keys(items).length"/>
    <div v-for="(key, index) in Object.keys(items)" :key="index" :class="box">
      <span class="grade">{{ key }} <small> (the owner's grade) </small></span>
      <PetNames :pets="items[key]">
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

  props: ['items']
}
</script>

<style scoped>
.grade {
    font-size: 16px;
    font-style: bold;
}
</style>