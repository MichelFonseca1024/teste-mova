import Vue from 'vue'
import App from './App.vue'

// router setup
import router from './routes/router'
import './assets/css/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
