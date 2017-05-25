import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ejemplo from '@/components/ejemplo'
import Agenda from '@/components/Agenda'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/ejemplo',
    	component: Ejemplo
    },
    {
    	path: '/agenda',
    	component: Agenda

    }

  ]
})
