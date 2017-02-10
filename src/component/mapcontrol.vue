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
  import '../libs/L.Map.Sync.js';

  export default {
  computed: mapGetters([
        'leftUrl',
        'rightUrl',
        'leftCenter',
        'rightCenter',
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
        leftCenter(val){
          this.mapLeft.setView(val, this.leftZoom);
        },
        rightCenter(val){
          this.mapRight.setView(val, this.rightZoom);
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
        const mapLeft = this.mapLeft = L.map('mapleft').setView(this.leftCenter, this.leftZoom);
        this.tileLeft = L.tileLayer(this.leftUrl).addTo(mapLeft);
        const mapRight = this.mapRight = L.map('mapright').setView(this.rightCenter, this.rightZoom);
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
