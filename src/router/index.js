import Vue from 'vue'
import Router from 'vue-router'
import LandingContent from '@/components/LandingContent'

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
