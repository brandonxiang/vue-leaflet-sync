<style>
    .map {
        display: flex;
        justify-content: space-between;
        width: 100%
    }

    #mapleft,
    #mapright {
        width: 50%;
    }
</style>

<template>

<div class="map">
    <div id="mapleft"></div>
    <div id="mapright"></div>
</div>

</template>

<script>
  import L from 'leaflet';
  import { mapGetters } from 'vuex';
  import css from '../../node_modules/leaflet/dist/leaflet.css';
  import '../libs/rastercoord.js'
  import '../libs/L.Map.Sync.js';

  export default {
  computed: mapGetters([
        'leftUrl',
        'rightUrl',
        'leftSize',
        'rightSize',
        'leftZoom',
        'rightZoom',
        'sync',
  ]),
  watch: {
        leftUrl(val) {
          this.tileLeft.setUrl(val);
        },
        rightUrl(val) {
          this.tileRight.setUrl(val);
        },
        leftSize(val){
          if(this.rcLeft){
            this.mapLeft.setView(this.rcLeft.unproject([val[0]/2, val[1]/2]), this.leftZoom);
          }
        },
        rightSize(val){
          if(this.rcRight){
            this.mapRight.setView(this.rcRight.unproject([val[0]/2, val[1]/2]), this.rightZoom);
          }
        },
        leftZoom(val){
          this.mapLeft.setZoom(val);
        },
        rightZoom(val){
          this.mapRight.setZoom(val);
        },
        sync(val) {
          this.syncStart(val);
        },
  },
  mounted() {
        const imgLeft = this.leftSize;
        const mapLeft = this.mapLeft = L.map('mapleft', {maxZoom:5, minZoom:2});
        const rcLeft = this.rcLeft = new L.RasterCoords(this.mapLeft,imgLeft);
        mapLeft.setView(rcLeft.unproject([imgLeft[0]/2, imgLeft[1]/2]),this.leftZoom);
        rcLeft.setMaxBounds();
        this.tileLeft = L.tileLayer(this.leftUrl).addTo(mapLeft);

        const imgRight = this.rightSize;
        const mapRight = this.mapRight = L.map('mapright', {maxZoom:5, minZoom:2});
        const rcRight = this.rcRight = new L.RasterCoords(this.mapRight,imgRight);
        mapRight.setView(rcRight.unproject([imgRight[0]/2, imgRight[1]/2]), this.rightZoom);
        rcRight.setMaxBounds();
        this.tileRight = L.tileLayer(this.rightUrl).addTo(mapRight);
        this.syncStart(this.sync);
  },
  methods: {
        syncStart(val) {
          if (val && this.mapLeft && this.mapRight) {
            this.mapLeft.sync(this.mapRight);
            this.mapRight.sync(this.mapLeft);
          } else {
            this.mapLeft.unsync(this.mapRight);
            this.mapRight.unsync(this.mapLeft);
          }
        },
  },

};
</script>
