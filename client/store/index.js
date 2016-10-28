import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  passcode: '',
  input1:''
}

const mutations = {
  updatePasscode(state,passcode) {
    state.passcode=passcode
  }
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
