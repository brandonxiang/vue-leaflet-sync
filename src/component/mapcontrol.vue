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
    import {mapGetters} from 'vuex'
    import css from '../../node_modules/leaflet/dist/leaflet.css';
    import '../libs/L.Map.Sync.js'

    export default {
      computed:mapGetters([
        'leftUrl',
        'rightUrl',
        'sync',
      ]),
       watch:{
         leftUrl:function(val){
           this.leftTile.setUrl(val);
         },
         rightUrl:function(val){
           this.rightTile.setUrl(val);
         },
         sync:function(val){
           this.syncStart(val);
         }
       },
      mounted() {
          const mapLeft = this.mapLeft = L.map('mapleft').setView([51.505, -0.09], 13);
          this.leftTile = L.tileLayer(this.leftUrl).addTo(mapLeft);
          const mapRight = this.mapRight = L.map('mapright').setView([51.505, -0.09], 13);
          this.rightTile = L.tileLayer(this.rightUrl).addTo(mapRight);
          this.syncStart(this.sync);

      },
      methods:{
        syncStart: function(val){
        if (val && this.mapLeft && this.mapRight) {
            this.mapLeft.sync(this.mapRight)
            this.mapRight.sync(this.mapLeft)
        }else{
          this.mapLeft.unsync(this.mapRight)
          this.mapRight.unsync(this.mapLeft)
        }
      },
      }

    }
</script>
