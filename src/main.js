import Vue from 'vue'
// import Vuex from 'vuex'
// import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'assets/css/iconfont.css'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(elementUI);

require('./mock/mock');

new Vue({
  router,
  store,
  render: h => h(App) // es6的语法，类似el: #app,渲染一个试图，然后提供给el挂载
}).$mount('#app');
