import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from '../components/ProductPage.vue';
import Basket from '../components/Basket.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'ProductPage',
      component: ProductPage,
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket,
    },
  ],
});
