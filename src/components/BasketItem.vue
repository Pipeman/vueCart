<template>
    <li>{{ product.title }} <button @click="addProductToBasket(product)">Add to basket</button></li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BasketItem',
  props: ['product'],
  computed: mapGetters(['basket']),
  methods: mapActions(['addProductToBasket'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 0 10px;
}
</style>
