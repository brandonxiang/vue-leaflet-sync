export default {
  all: state => state.displayItems,
  leftUrl: state => state.displayItems[state.itemId].leftUrl,
  leftSize: state => state.displayItems[state.itemId].leftSize,
  leftZoom: state => state.displayItems[state.itemId].leftZoom,
  rightUrl: state => state.displayItems[state.itemId].rightUrl,
  rightSize: state => state.displayItems[state.itemId].rightSize,
  rightZoom: state => state.displayItems[state.itemId].rightZoom,
  sync: state => state.displayItems[state.itemId].sync,
};
