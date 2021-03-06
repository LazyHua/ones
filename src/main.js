// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './common/fonts/style.css'
import echarts from 'echarts'
import { get,post,success,error,checkNull } from '@/common/js/common.js'
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false//根据字面意思的提示
Vue.use(ElementUI)
import Qs from 'qs'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})