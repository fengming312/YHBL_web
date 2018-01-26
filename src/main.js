import App from './App'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
//import store from '@/vuex'
import router from './router'

//sync(store, router);
Vue.prototype.axios = axios;
//全局事件中心
window.eventHub = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
