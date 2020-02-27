import Vue from 'vue'
import * as bulmabox from '../node_modules/bulmabox/bulmabox.min.js'
import App from './App.vue'
import router from './router'
window.bulmabox = bulmabox


// Vue.use(bulmabox)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
