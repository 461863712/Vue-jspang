import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        top: Hi1,
        default: HelloWorld,
        bottom: Hi2
      }
    },
    {
      path: '/jsPang',
      name: 'HelloWorld',
      components: {
        top: Hi2,
        default: HelloWorld,
        bottom: Hi1
      }
    }
  ]
})
