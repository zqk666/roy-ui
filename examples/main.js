import Vue from 'vue'
import RoyUI from '../packages'
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(RoyUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
