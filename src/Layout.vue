<style>
    body {
        margin: 0;
    }

    .HolyGrail {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    header {
        flex: 1;
        height: 200px;
    }

    .HolyGrail-body {
        display: flex;
        flex: 1;
    }

    .HolyGrail-content {
        flex: 1;
        position: relative;
    }

    .HolyGrail-nav,
    .HolyGrail-ads {
        flex: 0 0 12em;
    }

    .HolyGrail-nav {
        order: -1;
    }

    .leaflet-container{
      background:#fff!important;
      border-left: 1px solid #333;
    }
</style>

<template>

<div class="HolyGrail">
    <navbar></navbar>
    <div class="HolyGrail-body">
        <map-content class="HolyGrail-content"></map-content>
        <sidebar class="HolyGrail-nav"></sidebar>
    </div>
</div>

</template>

<script>
    import Navbar from './components/Navbar';
    import MapContent from './components/MapContent';
    import Sidebar from './components/Sidebar';

    export default {
      components: {
        Navbar,
        Sidebar,
        MapContent,
      },
};
</script>
