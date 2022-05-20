import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { mapRouter } from './moudle/map'
import { otherRouter } from './moudle/other'

Vue.use(VueRouter)

const routes = [
  ...mapRouter,
  ...otherRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
