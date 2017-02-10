export default {
  all: state => state.displayItems,
  leftUrl: state => state.displayItems[state.itemId].leftUrl,
  leftCenter: state => state.displayItems[state.itemId].leftCenter,
  leftZoom: state => state.displayItems[state.itemId].leftZoom,
  rightUrl: state => state.displayItems[state.itemId].rightUrl,
  rightCenter: state => state.displayItems[state.itemId].rightCenter,
  rightZoom: state => state.displayItems[state.itemId].rightZoom,
  sync: state => state.displayItems[state.itemId].sync,
};
