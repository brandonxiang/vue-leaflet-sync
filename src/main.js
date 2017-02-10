import Vue from 'vue'
import App from './Layout.vue'
import store from './vuex/store.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
