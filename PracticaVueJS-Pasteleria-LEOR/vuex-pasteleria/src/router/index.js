import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../views/Menu.vue'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pastelero.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
