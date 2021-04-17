import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: '',
    filter: '',
    countries: null
  },

  mutations: {
    CHANGE_TYPE (state, payload) {
      state.type = payload
    },
    CHANGE_FILTER (state, payload) {
      state.filter = payload
    },
    CHANGE_COUNTRIES (state, payload) {
      state.countries = payload
    }
  },

  actions: {
    async GET_COUNTRIES (context, endpoint) {
      try {
        const type = context.state.type.service
        const { filter } = context.state
        const { data } = await api.get(endpoint || `/${type}/${filter}`)

        context.commit('CHANGE_COUNTRIES', data)
      } catch (err) {
        console.log(err)
      }
    }
  },

  modules: {}
})
