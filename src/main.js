import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
