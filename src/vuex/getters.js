export default {
  all: state => state.index,
  leftUrl: state => state[state.itemType][state.itemId].leftUrl,
  leftSize: state => state[state.itemType][state.itemId].leftSize,
  leftZoom: state => state[state.itemType][state.itemId].leftZoom,
  rightUrl: state => state[state.itemType][state.itemId].rightUrl,
  rightSize: state => state[state.itemType][state.itemId].rightSize,
  rightZoom: state => state[state.itemType][state.itemId].rightZoom,
  sync: state => state[state.itemType][state.itemId].sync,
};
