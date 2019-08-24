import Vue from 'vue'
import App from './App.vue'
import './config/bootstrap'
import './config/toast'
import './config/filter-money'
import router from './config/router'
import store from './config/store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
