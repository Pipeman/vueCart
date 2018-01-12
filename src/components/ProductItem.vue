<template>
    <li
      class="product-list__product"
    >{{ product.title }} (&#163;{{ product.price }}) <button @click="addProductToBasket(product)">Add to basket</button></li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductItem',
  props: ['product'],
  computed: mapGetters(['basket']),
  methods: mapActions(['addProductToBasket']),
};
</script>
