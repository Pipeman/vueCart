<template>
    <li>
      {{ product.title }} (&#163;{{ product.price }}) Qty: {{ product.quantity }}
      <button @click="increaseProductQuantity(product)">+</button>
      <button @click="decreaseProductQuantity(product)">-</button>
      <button @click="removeProductFromBasket(product)">Remove</button>      
    </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'BasketItem',
  props: ['product'],
  computed: mapGetters(['basket']),
  methods: mapActions([
    'increaseProductQuantity',
    'decreaseProductQuantity',
    'removeProductFromBasket',
  ]),
};
</script>
