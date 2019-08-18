import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import './config/toast'
import './config/filter-money'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
