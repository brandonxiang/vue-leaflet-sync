<template>
  <div>
  <el-tabs v-model="activeName" @tab-click="onClick">
    <el-tab-pane label="首页" name="index"></el-tab-pane>
    <el-tab-pane label="居民区" name="resident" ></el-tab-pane>
    <el-tab-pane label="工业区" name="industry" @tab-click="setItemType('industry')"></el-tab-pane>
  </el-tabs>
  <map-control></map-control>
  </div>
</template>

<script>
import MapControl from './MapControl';
import {mapMutations} from 'vuex';

export default{
  data() {
    return {
      activeName: 'index',
    };
  },
  components: {
    MapControl,
  },
  methods:{
    ...mapMutations([
      'setItemType',
    ]),
    onClick(e){
      this.setItemType(e.name);
    }
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
