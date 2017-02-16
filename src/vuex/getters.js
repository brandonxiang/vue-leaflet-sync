export default {
  all: state => state.index,
  leftUrl: state => state.index[state.itemId].leftUrl,
  leftSize: state => state.index[state.itemId].leftSize,
  leftZoom: state => state.index[state.itemId].leftZoom,
  rightUrl: state => state.index[state.itemId].rightUrl,
  rightSize: state => state.index[state.itemId].rightSize,
  rightZoom: state => state.index[state.itemId].rightZoom,
  sync: state => state.index[state.itemId].sync,
};
