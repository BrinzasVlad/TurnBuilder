import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GameSpecification from '../views/GameSpecification.vue'
import GamePlaytest from '../views/GamePlaytest.vue'
import TestView from '../views/TestView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/specify',
    name: 'Game Specification',
    component: GameSpecification
  },
  {
    path: '/playtest',
    name: 'Game Playtesting',
    component: GamePlaytest
  },
  {
    path: '/test-view',
    name: 'Test',
    component: TestView
  }
]

const router = new VueRouter({
  routes
})

export default router
