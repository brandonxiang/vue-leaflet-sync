import Vue from 'vue';
import Vuex from 'vuex';

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

const mutations = {
  setDisplayItem(state, displayItems) {
    state.displayItems = displayItems;
  },
  setItemId(state, itemId) {
    state.itemId = itemId;
  },
};

const getters = {
  all: state => state.displayItems,
  leftUrl: state => state.displayItems[state.itemId].leftUrl,
  rightUrl: state => state.displayItems[state.itemId].rightUrl,
  sync: state=> state.displayItems[state.itemId].sync,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
