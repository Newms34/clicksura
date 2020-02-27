import Vue from 'vue'
import App from './App.vue'
import router from './router'
import derp from 'bulmabox'
console.log('derp',derp)
// window.bulmabox = require('bulmabox')

// Vue.use(bulmabox)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
