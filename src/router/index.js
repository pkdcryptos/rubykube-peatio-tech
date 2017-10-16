import Vue from 'vue'
import Router from 'vue-router'
import LandingContent from '@/components/LandingContent'
import $ from 'jquery'
window.jQuery = window.$ = $

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingContent',
      component: LandingContent
    }
  ]
})
