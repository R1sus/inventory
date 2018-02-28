<template lang="pug">
  .wrapper
    h1 Products
    ul
      li(v-for="product in products") {{product.title}}
</template>

<script>
import Api from '@/api/entities'

export default {
  name: 'Products',
  computed: {
    api () {
      return Api('products')
    },
    products () {
      return this.$store.getters['products/items']
    }
  }
}
</script>
