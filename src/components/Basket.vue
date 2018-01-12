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
import BasketItem from './BasketItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Basket',
  components: { BasketItem },
  computed: mapGetters(['basket', 'basketTotal'])
}
</script>
