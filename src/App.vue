<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

#app{
  height: 100vh;
  background-color: #e4e5e6;
}
</style>
