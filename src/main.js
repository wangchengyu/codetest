import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ApiService from './apiservice';

Vue.use(ElementUI);
ApiService.init();
//Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
