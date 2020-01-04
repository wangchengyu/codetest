import ApiService from "@/apiservice"
import { GET_CITYS, GET_WEATHER } from "@/store/actions.type"
import { AFTER_GETCITYS, AFTER_GETWEATHER } from "@/store/mutations.type"

const url_citys = 'http://localhost/api/weather/getCitys';
const url_weather = 'http://localhost/api/weather/getWeather/cityCode/';

const state = {
  citys: [],
  weather: []
};

const actions = {
  async [GET_CITYS] (context) {
    await ApiService
      .get(url_citys)
      .then((res) => {
        context.commit(AFTER_GETCITYS, { data: res.data.result})
    })
  },

  async [GET_WEATHER] (context, params) {
    await ApiService
      .get(url_weather + params.cityCode)
      .then((res) => {
        context.commit(AFTER_GETWEATHER, { data: res.data.result })
    })
  }
};

const getters = {
  Citys (state) {
    return state.citys;
  },

  Weather (state) {
    return state.weather;
  }
};

const mutations = {
  [AFTER_GETCITYS] (state, { data }) {
    state.citys = data;
  },
  [AFTER_GETWEATHER] (state, { data }) {
    state.weather = data;
  }
};

export default { 
  state, 
  actions,  
  getters, 
  mutations 
}