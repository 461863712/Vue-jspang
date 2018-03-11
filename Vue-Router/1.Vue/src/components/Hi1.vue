<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $route.params.username }}</h1>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Hi1'
    }
  }
}
</script>

<style>
  h1 {
    font-weight: normal;
  }
</style>
