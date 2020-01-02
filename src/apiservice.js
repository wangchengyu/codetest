import Vue from "vue"
import axios from "axios"
import VueAxios from "vue-axios"

var ApiService = {
  init() {
    Vue.use(VueAxios, axios);

    Vue.axios.interceptors.response.use (
      response => response,
      error => {
        Vue.$message('ERROR: ', error);
        return Promise.reject(error.response.data);
      }
    )
  },

  async get (resource, slug = '') {
    return await Vue.axios.get(`${resource}/${slug}`).catch(error => {
      Vue.$message(`ERROR : ApiService ${error}`)
    })
  }
}

export default ApiService;