import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import News from '@/components/news'
import Map from '@/components/map'
import QRCode from '@/components/QRCode'
import Banner from '@/components/banner'
import Lmenu from '@/components/Lmenu'
import DagTree from '@/components/DagTree'
import Dmenu from '@/components/Dmenu'
import video from '@/components/tabs/videplayer'
import eyemaps from '@/components/tabs/eyemaps'
import MapToolbox from '@/components/MapToolbox'
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
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/eyemaps',
      name: 'eyemaps',
      component: eyemaps
    },
    ,
    {
      path: '/MapToolbox',
      name: 'MapToolbox',
      component: MapToolbox
    },
  ]
})
