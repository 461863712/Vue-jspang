<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hi'
    }
  }
}
</script>

<style>
  h1 {
    font-weight: normal;
  }
</style>
