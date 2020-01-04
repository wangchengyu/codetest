import Vue from 'vue'
import Vuex from 'vuex'

import owners from "@/store/modules/owners"
import weather from "@/store/modules/weather"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    owners,
    weather
  }
})
