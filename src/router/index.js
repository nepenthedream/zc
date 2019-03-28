import Vue from 'vue'
import Router from 'vue-router'
import com from '@/components/com'
//import header from '@/components/header'
import leftmeum from '@/components/leftmenu'
import rightmenu from '@/components/rightmenu'
import condivdatails from '@/components/condivdatails'
import yuexiu from '@/components/yuexiu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'com',
      component: com
//    ,
//    leftmeum,
//   rightmenu
    },
    {
      path: '/condivdatails',
      name: 'condivdatails',
      component: condivdatails
//    ,
//    leftmeum,
//   rightmenu
    }
  ]
})
