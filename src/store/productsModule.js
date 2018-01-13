import { getProducts } from './../services/productsService';

const state = {
  products: [],
};

const getters = {
  products: ({ products }) => products,
};

const mutations = {
  setProducts(state, { products }) {
    state.products = products;
  },
};

const actions = {
  async retrieveProducts({ commit }) {
    const products = await getProducts();
    commit('setProducts', { products });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
