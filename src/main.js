// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'
import 'bootstrap'

Vue.config.productionTip = false

/* js */
import 'owlcarousel-pre/owl-carousel/owl.carousel.min.js'
import 'wowjs/dist/wow.min.js'
import 'counterup/jquery.counterup.min.js'
import 'jquery-validation/dist/jquery.validate.min.js'
import 'animsition/dist/js/animsition.min.js'
// import 'smoothscroll/smoothscroll.min.js'
import 'countdown/countdown.js'
import 'jquery.easing/bower_components/jquery-easing-original/jquery.easing.min.js'
import 'waypoints/lib/jquery.waypoints.min.js'
import './assets/js/custom.js'
import './assets/js/menu.js'

/* css */
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/custom.css'
import './assets/css/animate.css'
import 'owlcarousel-pre/owl-carousel/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import './assets/css/style.css'

import Header from '@/components/Header'
import Client from '@/components/Client'
import Tech from '@/components/Tech'
import Features from '@/components/Features'
import Platform from '@/components/Platform'
import Pricing from '@/components/Pricing'

Vue.component('Header', Header)
Vue.component('Client', Client)
Vue.component('Tech', Tech)
Vue.component('Features', Features)
Vue.component('Platform', Platform)
Vue.component('Pricing', Pricing)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.use(VueAnalytics, {
  id: 'UA-76648418-6',
  router
})
