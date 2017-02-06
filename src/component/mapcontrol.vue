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
    import L from 'leaflet'
    import css from '../../node_modules/leaflet/dist/leaflet.css';
    import '../libs/L.Map.Sync.js'

    export default {
        props: ['sync','items'],
        mounted() {
            var mapLeft = L.map('mapleft').setView([51.505, -0.09], 13);

            L.tileLayer(this.items[0].leftUrl, {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapLeft);

            var mapRight = L.map('mapright').setView([51.505, -0.09], 13);

            L.tileLayer(this.items[0].rightUrl, {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRight);


            if (this.sync) {
                mapLeft.sync(mapRight)
                mapRight.sync(mapLeft)
            }
        }
    }
</script>
