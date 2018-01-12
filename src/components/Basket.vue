<template>
  <ul class="basket">
    <li
      is="basket-item"
      v-for="basketItem in basket"
      :key="basketItem.id"
      :product="product"
    ></li>
  </ul>
</template>

<script>
import BasketItem from './BasketItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Basket',
  components: { BasketItem },
  computed: mapGetters(['basket']),
  created () {
    this.$store.dispatch('retrieveProducts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  text-align: left;
  list-style-type: none;
  padding: 0;
}
</style>
