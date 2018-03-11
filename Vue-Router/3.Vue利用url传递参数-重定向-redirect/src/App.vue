<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <router-link to="/">home</router-link>
    <router-link to="/params/198/jsPang1">params</router-link>
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/goParams/66/jsPang2">goParams</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
