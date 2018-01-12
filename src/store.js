import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { getProducts } from './services/productsService'

Vue.use(Vuex)

export default new Store({
  state: {
    products: [],
    basket: []
  },
  getters: {
    products: state => state.products,
    basket: state => state.basket
  },
  mutations: {
    setProducts (state, { products }) {
      state.products = products
    },
    addToBasket (state, productToAdd) {
      const isProductInBasket = state.basket.some(({ id }) => productToAdd.id === id)
      if (!isProductInBasket) {
        state.basket.push({ id: productToAdd.id, quantity: 1 })
      }
    },
    
  },
  actions: {
    async retrieveProducts ({ commit }) {
      let products = await getProducts()
      commit('setProducts', { products })
    },
    addProductToBasket ({ commit }, product) {
      let productToAdd = Object.assign({}, product)
      commit('addToBasket', productToAdd)
    }
  }
})
