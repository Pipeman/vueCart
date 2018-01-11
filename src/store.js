import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import * as productsService from './services/productsService';

Vue.use(Vuex);

const store = new Store({
  state: {
    products: []
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products;
    }
  },
  actions: {
    async retrieveProducts({ commit }) {
      let products = await productsService.getProducts();
      commit('setProducts', { products })
    }
  }
});
