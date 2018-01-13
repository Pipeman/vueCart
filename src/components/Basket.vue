<template>
<section>
  <router-link :to="{name: 'ProductPage'}">Go to Products Page</router-link>
  <ul class="basket">
    <li
      is="basket-item"
      v-for="basketItem in basket"
      :key="basketItem.id"
      :product="basketItem"
    ></li>
  </ul>
  <strong>Basket Total: &#163;{{ basketTotal }}</strong>
</section>
</template>

<script>
import { mapGetters } from 'vuex';
import BasketItem from './BasketItem.vue';

export default {
  name: 'Basket',
  components: { BasketItem },
  computed: mapGetters(['basket', 'basketTotal']),
};
</script>
