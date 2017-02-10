import Vue from 'vue';
import App from './Layout';
import store from './vuex/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
