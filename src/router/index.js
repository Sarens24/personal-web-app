import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import CurrencyExchange from '../views/currencyExchange/CurrencyExchangeView.vue'
import AspenSpas from '../views/AspenSpasView.vue'
import SnakeGame from '../views/snakeGame/SnakeGameView.vue'
import WikiGenerator from '../views/WikiGeneratorView.vue'
import AboutMe from '../views/AboutMeView.vue'
import BookRatings from '../views/BookRatings.vue'

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
    path: '/wikiGenerator',
    component: WikiGenerator
  },
  {
    path: '/bookratings',
    component: BookRatings
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
