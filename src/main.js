import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './Layout';
import store from './vuex/store';
import '../node_modules/bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
