<template>
  <ul>
    <li v-for="(pet, index) in sort(pets)" :key="index">
      <span >{{ pet.name }}</span>
    </li>
    <li v-if="!pets.length">--</li>
  </ul>
</template>

<script>
export default {
  name: 'petNames',

  props: ['pets'],
  
  methods: {
    sort (list) {
      return list.sort(function (a, b) {a['name'].localeCompare(b['name']);});
    },
  }
}
</script>
<style scoped>
ul {
    padding: 18px 60px;
    margin: 0;
}
ul li {
      height: 34px;
      display: flex;
      align-items: center;
}
</style>