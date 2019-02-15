import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/Front.vue'
import Create from '@/components/CreateSP.vue'
import ViewSnowpark from '@/components/singlePark.vue'

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
    },
    {
      path: '/snowpark/:id',
      name: 'snowpark',
      component: ViewSnowpark
    }
  ]
})
