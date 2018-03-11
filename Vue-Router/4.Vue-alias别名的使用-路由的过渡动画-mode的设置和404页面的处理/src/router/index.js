import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Hi1',
      name: 'Hi1',
      component: Hi1,
      alias: '/jsPang'
    },
    {
      path: '*',
      name: '*',
      component: Error
    }
  ]
})
