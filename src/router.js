import { createRouter, createWebHistory } from 'vue-router'
import { scrollTopHash } from './shared/html'

const routes = []

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.hash !== scrollTopHash) {
      return savedPosition // keep position on page reload
    }
    if (to.hash === scrollTopHash) {
      window.location.hash = ''
    }
    return { top: 0 } // scroll to top on navigation
  }
})

export default router
