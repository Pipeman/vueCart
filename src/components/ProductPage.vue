<template>
<section>
  <ul class="product-list">
    <li
      is="product-item"
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></li>
  </ul>
  <strong>You have {{ numProductsInBasket }} products in <router-link :to="{ name: 'Basket' }">Basket</router-link> for a total of &#163;{{ basketTotal }}</strong>
</section>
</template>

<script>
import ProductItem from './ProductItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductPage',
  components: { ProductItem },
  computed: mapGetters([
    'products',
    'basketTotal',
    'numProductsInBasket'
  ]),
  created () {
    this.$store.dispatch('retrieveProducts')
  }
}
</script>
