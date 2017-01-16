<template>
<div class="map">
<div id="mapleft"></div>
<div id="mapright"></div>
</div>
</template>

<script>

import L from 'leaflet'
import css from '../../node_modules/leaflet/dist/leaflet.css';
import '../libs/L.Map.Sync.js'

export default {
    props: [],
    mounted() {
        var mapLeft = L.map('mapleft').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapLeft);

        var mapRight = L.map('mapright').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRight);

        mapLeft.sync(mapRight)
        mapRight.sync(mapLeft)
    }
}

</script>

<style>


.map {
  display:flex;
  justify-content: space-between;
  width:100%
}

#mapleft,#mapright{
  width:50%;
}

</style>
