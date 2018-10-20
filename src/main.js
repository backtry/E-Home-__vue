// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HeaderC from '@/components/header.vue'
import $axios from './util/index.js'
import LoadingM from './components/loading.vue'
import store from '@/store/index.js'
import qs from 'qs'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Mint);



Vue.config.productionTip = false
Vue.component("HeaderC",HeaderC);
Vue.component('LoadingM',LoadingM)
Vue.prototype.$axios = $axios
Vue.prototype.qs = qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
