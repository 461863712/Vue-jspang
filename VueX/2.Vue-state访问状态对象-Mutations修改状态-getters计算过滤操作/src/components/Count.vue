<template>
  <div class="hello">
    <h1>{{ msg }}</h1><hr/>
    <button @click="$store.commit('reduce',5)">-</button>
    <span>{{ $store.state.count }}={{ count }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'count' ])
  },
  methods: mapMutations([ 'reduce', 'add' ]),
  store
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
