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
        <MapControl :items="items" sync="true" class="HolyGrail-content"></MapControl>
        <Sidebar :items="items" class="HolyGrail-nav"></Sidebar>
    </div>
</div>

</template>

<script>
    import Navbar from './component/navbar.vue'
    import MapControl from './component/mapcontrol.vue'
    import Sidebar from './component/sidebar.vue'

    export default {
        components: {
            Navbar,
            Sidebar,
            MapControl
        },
        data(){
          return {
            items:[
              {name:"title",leftUrl:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",rightUrl:"http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png"},
              {name:"test",leftUrl:"http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",rightUrl:"http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png"}
            ]
          }
        },
        create(){

        }

    }
</script>
