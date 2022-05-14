import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/home.vue'
import Details from '@/views/details.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:pokemonId',
      name: 'details',
      component: Details
    }
  ]
})

export default router
