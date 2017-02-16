<template>
  <div class="sidebar">
    <el-menu default-active="0" class="el-menu-bar" :router="true" @select="onClick">
      <el-menu-item :index="item.id" v-for="item in displayItems" :route="'/'+item.id">{{item.name}}</el-menu-item>
     </el-menu>
  </div>

<!-- <b-button-group :vertical="true">  
  <b-button  v-for="item in displayItems" href="#" @click="setItemId(item.id)">{{item.name}}</b-button>  
</b-button-group> -->
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      displayItems: this.$store.state.index,
      vertical: true,
    };
  },
  methods: {
    ...mapMutations([
      'setItemId',
    ]),
    onClick(){
      // console.log(this.$route.params.id);
    }
  },
};

</script>

<style>
.sidebar{
  position: relative;
}
.el-menu-bar{
  position: absolute;
  width:100%;
  height:100%;
  overflow-y: auto;
}
</style>
