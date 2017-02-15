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
</style>

<template>

<div class="HolyGrail">
    <navbar></navbar>
    <div class="HolyGrail-body">
        <MapControl class="HolyGrail-content"></MapControl>
        <Sidebar class="HolyGrail-nav"></Sidebar>
    </div>
</div>

</template>

<script>
    import Navbar from './component/navbar';
    import MapControl from './component/mapcontrol';
    import Sidebar from './component/sidebar';

    export default {
      components: {
        Navbar,
        Sidebar,
        MapControl,
      },
};
</script>
