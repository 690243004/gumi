import Vue from 'vue'
import App from './App.vue'
import router from './router'
import eruda from 'eruda'
Vue.config.productionTip = false
import '@/assets/normal.scss'
import '@/assets/global.scss'
import { install } from './components'

install(Vue)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

eruda.init()
