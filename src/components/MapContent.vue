<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="首页" name="index"><map-control></map-control></el-tab-pane>
    <el-tab-pane label="居民区" name="resident">居民区</el-tab-pane>
    <el-tab-pane label="工业区" name="industry">工业区</el-tab-pane>
  </el-tabs>
</template>

<script>
import MapControl from './MapControl';

export default{
  data() {
    return {
      activeName: 'index',
    };
  },
  components: {
    MapControl,
  },
};
</script>

<style>
.el-tabs__content{
  flex:1;
}

.el-tab-pane{
  position: absolute;
  width:100%;
  height:100%;
}

.el-tabs__header{
  margin: 0;
}
</style>
