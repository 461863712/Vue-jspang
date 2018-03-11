<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">home</router-link>
    <router-link to="/params/198/jsPang1">params</router-link>
    <router-link to="/gohome">gohome</router-link>
    <router-link to="/goParams/66/jsPang2">goParams</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goGo () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
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
