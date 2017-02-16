<style>
      body, html {
          margin: 0;
          height:100%;
      }

      * {
          margin: 0;
          padding: 0;
          text-align: center;
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
        display: flex;
        flex-direction: column;
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
        <map-content class="HolyGrail-content"></map-content>
        <sidebar class="HolyGrail-nav"></sidebar>
    </div>
</div>

</template>

<script>
    import Navbar from './components/Navbar';
    import MapContent from './components/MapContent';
    import Sidebar from './components/Sidebar';
    import { mapMutations } from 'vuex';

    export default {
      components: {
        Navbar,
        Sidebar,
        MapContent,
      },
      watch: {
        $route(to, from) {
          this.setItemId(to.params.id);
        },
      },
      methods: mapMutations([
        'setItemId',
      ]),
};
</script>
