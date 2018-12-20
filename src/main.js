import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as filters from './filters' // 全局vue filter
import {
  prototypeJS
} from '@/utils/prototype.js'
import './styles/index.scss'
import './permission' // permission control

Vue.config.productionTip = false

// 配置全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 执行方法
prototypeJS()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
