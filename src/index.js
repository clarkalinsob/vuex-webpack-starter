import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'normalize.css'
import '../assets/app.styl'

/* eslint-disable-next-line no-new */
new Vue({
  router,
  el: '#app',
  props: [],
  data: {},
  render: h => h(App)
})
