<template>
  <ul>
    <li v-for="(pet, index) in sort(pets)" :key="index">
      <slot name="pet" :pet="pet">{{ pet.name }}</slot>
    </li>
    <li v-if="!pets.length">--</li>
  </ul>
</template>


<script>
export default {
  name: 'petNames',

  props: ['pets'],
  
  methods: {
    sort (pets) {
      return pets.sort(this._compare('name'));
    },

    _compare (prop) {
      return (a, b) => a[prop].localeCompare(b[prop]);
    }
  }
}
</script>
<style scoped>
ul {
    padding: 16px 64px;
    margin: 0;
}
ul li {
      height: 32px;
      display: flex;
      align-items: center;
}
</style>