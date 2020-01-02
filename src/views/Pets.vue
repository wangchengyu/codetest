<template>
    <el-main >
        <el-card shadow="always" header ="List of Pets' names">
        <PetOwnerGrade :grades="ownersToGrades" ></PetOwnerGrade>
        </el-card>
    </el-main>
</template>

<script>
import { mapGetters } from "vuex"
import { GET_OWNERS } from "@/store/actions.type"
import {OWNERS_GETTER_OWNERS} from "@/store/owners.getter.name";
import PetOwnerGrade from "@/components/PetOwnerGrade"

const QUERY_PET_TYPE = 'Cat';

export default {
  name: 'pets',

  components: { PetOwnerGrade },

  created () {
    this.getOwners();
  },

  methods: {
    getOwners () {
      this.$store.dispatch(GET_OWNERS, {type: QUERY_PET_TYPE});
    }
  },

  computed: {
    ...mapGetters([OWNERS_GETTER_OWNERS])
  }

}
</script>