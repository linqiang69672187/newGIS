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
import CallBox from '@/components/control/CallBox'
import test from '@/components/test'
import notices from '@/components/tabs/GPScontrol'
import LeftToolbox from '@/components/control/LeftToolbox'
import Ds2000 from '@/components/Ds2000'

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
    {
      path: '/MapToolbox',
      name: 'MapToolbox',
      component: MapToolbox
    },
    {
      path: '/CallBox',
      name: 'CallBox',
      component: CallBox
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/notices',
      name: 'notices',
      component: notices
    },
    {
      path: '/LeftToolbox',
      name: 'LeftToolbox',
      component: LeftToolbox
    }, 
    {
      path: '/Ds2000',
      name: 'Ds2000',
      component: Ds2000
    },
  ]
})
