import Vue from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store"

import "./plugins/swiper"
import "./plugins/waterfall2"
import "./plugins/imgLazy"

import 'lib-flexible/flexible'


import * as API from "./api"
Vue.prototype.$API = API
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this//全局事件总线
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')


