// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HeaderC from '@/components/header.vue'
import $axios from './util/index.js'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.component("HeaderC",HeaderC);
Vue.prototype.$axios = $axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  
  components: { App },
  template: '<App/>'
})
