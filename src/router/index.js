import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import About from '@/components/About'
import Bio from '@/components/Bio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    }
  ]
})
