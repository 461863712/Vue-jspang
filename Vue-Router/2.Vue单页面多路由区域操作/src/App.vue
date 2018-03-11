<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">还原</router-link>
    <router-link to="/jsPang">变换</router-link>
    <router-view name="top" style="height: 100px;background: red"></router-view>
    <router-view style="height: 100px;background: green"></router-view>
    <router-view name="bottom" style="height: 100px;background: blue"></router-view>
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
