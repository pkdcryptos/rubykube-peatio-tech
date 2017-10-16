// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* js */
import 'owl.carousel/dist/owl.carousel.min.js'
import 'wowjs/dist/wow.min.js'
import 'counterup/jquery.counterup.min.js'
import 'jquery-validation/dist/jquery.validate.min.js'
import './assets/js/custom.js'
import './assets/js/menu.js'

/* css */
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import './assets/css/animate.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import './assets/css/style.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
