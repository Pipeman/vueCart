<template>
  <ul class="product-list">
    <li
      class="product-list__product"
      v-for="{id, title} in products"
      :key="id"
    >{{ title }} <button @click="addProductToBasket">+</button></li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductPage',
  computed: mapGetters(['products', 'basket']),
  methods: mapActions(['addProductToBasket']),
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
li {
  margin: 0 10px;
}
</style>
