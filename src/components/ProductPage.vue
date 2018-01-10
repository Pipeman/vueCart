<template>
  <ul class="product-list">
    <li
      class="product-list__product"
      v-for="{id, title} in products"
      :key="id"
    >{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ProductPage',
  data () {
    return {
      products: [
        {
          id: 'A',
          title: 'The SlimCase',
          price: 8.99
        },
        {
          id: 'B',
          title: 'Hardcover Notebook',
          price: 14.99
        },
        {
          id: 'C',
          title: 'Softcover Journal',
          price: 5.75
        }
      ]
    }
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
