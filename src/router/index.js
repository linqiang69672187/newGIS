import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/news'
import Map from '@/components/map'
import QRCode from '@/components/QRCode'
import Banner from '@/components/banner'
import Lmenu from '@/components/Lmenu'
import DagTree from '@/components/DagTree'
import Dmenu from '@/components/Dmenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRCode
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
     {
      path: '/Lmenu',
      name: 'Lmenu',
      component: Lmenu
    },
    {
      path: '/DagTree',
      name: 'DagTree',
      component: DagTree
    },
    {
      path: '/Dmenu',
      name: 'Dmenu',
      component: Dmenu
    },
  ]
})
