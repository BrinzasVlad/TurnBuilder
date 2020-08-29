import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

// FIXME: should we mention here that we are using Vue Select under the permissions of its MIT License?
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
