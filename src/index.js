import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import '@/assets/normal.scss'
import '@/assets/global.scss'
import { install } from './components'
import './utils/mobile-site'
install(Vue)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

if (process.env.NODE_ENV === 'development') {
  const eruda = require('eruda')
  eruda.init()
}
