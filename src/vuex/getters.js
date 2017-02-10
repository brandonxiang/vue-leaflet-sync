export default {
  all: state => state.displayItems,
  leftUrl: state => state.displayItems[state.itemId].leftUrl,
  rightUrl: state => state.displayItems[state.itemId].rightUrl,
  sync: state => state.displayItems[state.itemId].sync,
};
