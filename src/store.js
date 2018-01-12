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
    products: ({ products }) => products,
    basket: ({ basket }) => basket,
    basketTotal: ({ basket }) => basket.reduce((total, { price, quantity }) => total + price * quantity, 0).toFixed(2),
    numProductsInBasket: ({ basket }) => basket.length
  },
  mutations: {
    setProducts (state, { products }) {
      state.products = products
    },
    addToBasket (state, productToAdd) {
      const isProductInBasket = state.basket.some(({ id }) => productToAdd.id === id)
      if (!isProductInBasket) {
        state.basket.push({ ...productToAdd, quantity: 1 })
      }
    },
    modifyProductQuantity (state, { product, modifier }) {
      const productInBasket = state.basket.find(({ id }) => product.id === id)
      try {
        (productInBasket.quantity + modifier > 0)
          ? updateQuantity(productInBasket, modifier)
          : removeProductFromBasket(productInBasket.id, state.basket)
      } catch (e) {
        console.error('You can\'t modify the quantity of a product that is not in the basket')
      }
    },
    removeFromBasket (state, { id }) {
      removeProductFromBasket(id, state.basket)
    }
  },
  actions: {
    async retrieveProducts ({ commit }) {
      let products = await getProducts()
      commit('setProducts', { products })
    },
    addProductToBasket ({ commit }, productToAdd) {
      commit('addToBasket', Object.assign({}, productToAdd))
    },
    increaseProductQuantity ({ commit }, productToIncreaseQtyOf) {
      commit('modifyProductQuantity', { product: copyObj(productToIncreaseQtyOf), modifier: 1 })
    },
    decreaseProductQuantity ({ commit }, productToDecreaseQtyOf) {
      commit('modifyProductQuantity', { product: copyObj(productToDecreaseQtyOf), modifier: -1 })
    },
    removeProductFromBasket ({ commit }, productToRemove) {
      commit('removeFromBasket', { product: copyObj(productToRemove) })
    }
  }
})

function copyObj (objToCopy) {
  return Object.assign({}, objToCopy)
}

function updateQuantity (product, modifier) {
  product.quantity += modifier
}

function removeProductFromBasket (productToRemoveId, basket) {
  const index = basket.findIndex(({ id }) => productToRemoveId === id)
  basket.splice(index, 1)
}
