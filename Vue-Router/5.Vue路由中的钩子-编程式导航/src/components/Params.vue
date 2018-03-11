<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      msg: 'Params'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('进入Params路由模板')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('离开Params路由模板')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
