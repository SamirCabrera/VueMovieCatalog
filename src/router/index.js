import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from '../views/Catalog/Catalogs.vue'
import ToViewLater from '../views/ToViewLater/To-view-later.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/catalogs',
    name: 'Catalogs',
    component: Catalog
  },
  {
    path: '/toViewLater',
    name: 'ToViewLater',
    component: ToViewLater
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
