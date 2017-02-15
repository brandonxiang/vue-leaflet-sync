<template>
  <div>
  <b-nav pills>
    <b-nav-item link="#" active>首页</b-nav-item>
    <b-nav-item link="#">居住地</b-nav-item>
    <b-nav-item link="#">工业区</b-nav-item>
  </b-nav>
  <map-control></map-control>
</div>
</template>

<script>
import MapControl from './MapControl';

export default{
  components: {
    MapControl,
  },
};
</script>

<style>

</style>
