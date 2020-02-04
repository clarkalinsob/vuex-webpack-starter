import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '../views/404.vue'
import Dashboard from '../views/dashboard.vue'
import View1 from '../views/view-1.vue'
import View2 from '../views/view-2.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/view-1',
    name: 'view-1',
    component: View1
  },
  {
    path: '/view-2',
    name: 'view-2',
    component: View2
  }
]

const router = new Router({
  mode: 'history',
  linkExactActiveClass: '--active',
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return window.scrollTo({ top: document.querySelector(to.hash).offsetTop, behavior: 'smooth' })
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router
