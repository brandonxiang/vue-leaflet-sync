import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const state = {
  itemId: 0,
  displayItems: [
    {
      id: 0,
      name: 'title',
      leftUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      rightUrl: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
      sync: true,
    },
    {
      id: 1,
      name: 'test',
      leftUrl: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
      rightUrl: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
      sync: true,
    },
    {
      id: 2,
      name: 'test1',
      leftUrl: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
      rightUrl: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
      sync: false,
    },
  ],
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
