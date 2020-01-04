import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pets'
  },
  {
    path: '/pets',
    name: 'pets',
    component: () => import('@/views/Pets') 
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('@/views/Weather')
  }
]

const router = new VueRouter({
  routes
})

export default router
