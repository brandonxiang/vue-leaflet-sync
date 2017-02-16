import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import Layout from './Layout';
import store from './vuex/store';

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Layout },
    { path: '/:id', component: Layout },
  ],
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
