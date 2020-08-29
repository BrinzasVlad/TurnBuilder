import Vue from 'vue'
import VueRouter from 'vue-router'
import GameSpecification from '../views/GameSpecification.vue'
import GamePlaytest from '../views/GamePlaytest.vue'
import TestView from '../views/TestView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/specify',
    name: 'Game Specification',
    component: GameSpecification,
    alias: '/'
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
