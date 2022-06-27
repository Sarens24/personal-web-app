import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import CurrencyExchange from '../views/CurrencyExchangeView.vue'
import AspenSpas from '../views/AspenSpasView.vue'
import SnakeGame from '../views/SnakeGameView.vue'
import AboutMe from '../views/AboutMeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/currencyExchange',
    component: CurrencyExchange
  },  
  {
    path: '/aspenSpas',
    component: AspenSpas
  },  
  {
    path: '/snakeGame',
    component: SnakeGame
  },
  {
    path: '/aboutMe',
    component: AboutMe
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
