import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import News from '@/components/news'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    
  ]
})
