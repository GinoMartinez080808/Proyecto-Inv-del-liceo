import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/clase1matematica',
      name: 'clase1matematica',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lapso1/fisica/Clase1View.vue')
    },
    {
      path: '/clase1literatura',
      name: 'clase1literatura',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lapso1/Literatura/Clase1View.vue')
    },
    {
      path: '/clase1quimica',
      name: 'clase1quimica',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lapso1/quimica/Clase1View.vue')
    },
    {
      path: '/clase1ct',
      name: 'clase1ct',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lapso1/ciencias de la tierra/Clase1View.vue')
    },
    {
      path: '/clase1sobe',
      name: 'clase1sobe',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Lapso1/soberania/Clase1View.vue')
    }
  ]
})

export default router
