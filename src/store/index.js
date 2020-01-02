import Vue from 'vue'
import Vuex from 'vuex'

import owners from "@/store/modules/owners"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    owners
  }
})
