import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/Hello'
import List from '@/components/list/List'
import News from '@/components/list/components/News'
import Big from '@/components/list/components/Big'
import Test from '@/components/list/components/Test'
import Detail from '@/components/detail/Detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      children:[
        {
          path: '/',
          name: 'Big',
          component: Big
        },
        {
          path: 'news',
          name: 'News',
          component: News
        },
          {
          path: 'test',
          name: 'Test',
          component: Test,
        }
      ]
    },
  
  ]
})
