import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import rooms from './modules/rooms'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    products,
    rooms
  },
  state: {
    productItems: [],
    roomItems: []
  },
  getters: {},
  actions: {},
  mutations: {}
})

export default store
