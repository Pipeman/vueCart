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
    addToBasket (state, { productToAdd }) {
      const productInBasket = state.basket.find(({ id }) => productToAdd.id === id)
      productInBasket ? productInBasket.quantity++ : state.basket.push({ ...productToAdd, quantity: 1 })
      console.log(state.basket)
    }
  },
  actions: {
    async retrieveProducts ({ commit }) {
      let products = await getProducts()
      commit('setProducts', { products })
    },
    addProductToBasket ({ commit }, productToAdd) {
      commit('addToBasket', productToAdd)
    }
  }
})
