import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LearningList from '../views/LearningList.vue'
import ReactTimeGame from '../views/game/ReactTimeGame.vue'

const routes = [
  {
    path: '/',
    name: 'ToDoList',
    component: Home
  },
  {
    path: '/learninglist',
    name: 'LearningList',
    component : LearningList
  },
  {
    path : '/reacttimegame',
    name : 'ReactTimeGame',
    component : ReactTimeGame,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
