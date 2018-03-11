import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  reduce (state, n) {
    state.count -= n
  },
  add (state, n) {
    state.count++
  }
}

const getters = {
  count: function (state) {
    return state.count += 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
