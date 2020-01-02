<template>
    <el-main >
        <el-card shadow="always " header ="Pets List">
        <PetOwnerGrade :items="petList" ></PetOwnerGrade>
        </el-card>
    </el-main>
</template>

<script>
import PetOwnerGrade from "@/components/PetOwnerGrade"

export default {
  name: 'pets',

  data () { 
      return { 
          petList: this.getPets()
      }
  },

  components: { PetOwnerGrade },

  computed: {
    //pets: this.getPets()
  },

  created () {
    //this.getPets();
  },

  methods: {
    getPets () {
      return {
        'Male': [
            {name:'Jim'},
            {name:'Garfield'},
            
            {name:'Max'},
            {name:'Tom'}
        ],
        'Female': [
            {name:'Simba'},
            {name:'Tabby'},
            {name:'Garfield'}
        ]
        }
        //this.$store.dispatch(FETCH_PETS, this.type);
    }
  }
}
</script>