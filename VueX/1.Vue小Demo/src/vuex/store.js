import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  reduce (state) {
    state.count--
  },
  add (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations
})
