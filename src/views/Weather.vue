<template>
    <el-main >
        <el-card shadow="always" header ="Weather">
            <div class="text item" >
            <el-select v-model="value" placeholder="Please Chose a City" @change="getWeather(value)">
                <el-option 
                v-for="item in Citys"
                :key="item.code"
                :label="item.city_name"
                :value="item.code">
                </el-option>
            </el-select>
            </div>
            <div class="text item">
            <el-table
                :data="Weather"
                :show-header = "false"
                border
                style="width: 100%">
                <el-table-column
                prop="label"
                label=""
                width="180">
                </el-table-column>
                <el-table-column
                prop="value"
                label=""
                width="180">
                </el-table-column>
            </el-table>
            </div>

            <WeatherDetail :detail="getWeather"/>
        </el-card>
    </el-main>
</template>

<script>
import { mapGetters } from "vuex"
import { GET_CITYS } from "@/store/actions.type"
import { GET_WEATHER } from "@/store/actions.type"

export default {
  name: 'Weather',

  //components: { WeatherDetail },

  created () {
    this.getCitys();
  },

  methods: {
    getCitys () {
      this.$store.dispatch(GET_CITYS, {});
    },

    getWeather(cityCode) {
      this.$store.dispatch(GET_WEATHER, {cityCode: cityCode});
    }
  },

  computed: {
    ...mapGetters(['Citys', 'Weather'])
  }

}
</script>
<style scoped>
  .item {
    margin-bottom: 18px;
  }
</style>