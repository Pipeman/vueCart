import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import productsModule from './productsModule';
import basketModule from './basketModule';

Vue.use(Vuex);

export default new Store({
  modules: {
    productsModule,
    basketModule,
  },
});
