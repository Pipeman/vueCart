import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import getProducts from './services/productsService'

Vue.use(Vuex)

export default new Store({
  state: {
    products: []
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    setProducts (state, { products }) {
      state.products = products
    }
  },
  actions: {
    async retrieveProducts ({ commit }) {
      let products = await getProducts()
      commit('setProducts', { products })
    }
  }
})
