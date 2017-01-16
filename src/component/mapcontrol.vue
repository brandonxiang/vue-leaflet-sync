<template>

<div id="map">
</div>

</template>

<script>

import L from 'leaflet'
import css from '../../node_modules/leaflet/dist/leaflet.css';

export default {
    props: [],
    mounted() {
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }
}

</script>

<style>


#map {
    position:absolute;
    height: 100%;
    width: 100%;
}

</style>
