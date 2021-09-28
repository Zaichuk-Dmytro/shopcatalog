import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/main.scss'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false

const req = require.context('@/components', true, /\.(js|vue)$/i)
req.keys().map(key => {
  if (!(req(key).default || {}).name) {
    return
  }
  Vue.component(req(key).default.name, req(key).default)
})

const req1 = require.context('@/pages', true, /\.(js|vue)$/i)
req1.keys().map(key => {
  if (!(req1(key).default || {}).name) {
    return
  }
  Vue.component(req1(key).default.name, req1(key).default)
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')
