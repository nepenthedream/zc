// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import '../static/common/css/reset.css'
import '../static/common/css/wechat.css'

import '../static/common/css/swiper.min.css'
import '../static/weui/css/weui.min.css'
import '../static/jquery-weui/css/jquery-weui.css'
import '../static/common/css/mainAnddetail.css'
/* eslint-disable no-new */


import '../static/common/js/jquery-2.1.4.js'
import '../static/weui/js/weui.min.js' 
import '../static/jquery-weui/js/jquery-weui.js'
import '../static/jquery-weui/js/swiper.js'
import '../static/jquery-weui/js/swiper.min.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
