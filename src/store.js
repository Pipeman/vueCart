import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const store = new Store({
  state: {
    products: []
  },
  getters: {
    products: state => state.products
  },
  mutations: {
    getProducts(state, {products}) {
      state.products = products;
    }
  }
});
