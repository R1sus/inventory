import Api from '@/api/entities'

const state = {
  items: []
}

const getters = {
  items: (state) => {
    return state.items
  },
  itemsQty: (state, getters) => {
    return getters.items.length
  }
}

const actions = {
  init ({dispatch}) {
    dispatch('fetch')
  },
  fetch ({commit}) {
    Api('rooms').fetch()
      .then(result => {
        commit('SET_ITEMS', result)
      })
  }
}

const mutations = {
  SET_ITEMS (state, {data}) {
    state.items = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
