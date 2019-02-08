import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/Front'
import Create from '@/components/CreateSp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/Create',
      name: 'CreateSp',
      component: Create
    }
  ]
})
