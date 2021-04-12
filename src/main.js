import Vue from 'vue'
import App from './App.vue'
import store from './store'

// router setup
import router from './routes/router'
import './assets/css/index.css'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
