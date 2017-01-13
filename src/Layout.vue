<template>
  <div class="HolyGrail">
  <header>
  </header>
  <div class="HolyGrail-body">
    <main class="HolyGrail-conten"></main>
    <nav class="HolyGrail-nav"></nav>
  </div>
  </div>
</template>

<script>
</script>

<style>
.HolyGrail{
  display: flex;
  min-height:100vh;
  flex-direction: column;
}

header{
  flex:1;
  height:200px;
}

.HolyGrail-body{
  display:flex;
  flex:1;
}

.HolyGrail-content {
  flex: 1;
}

.HolyGrail-nav, .HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  order: -1;
}

</style>
