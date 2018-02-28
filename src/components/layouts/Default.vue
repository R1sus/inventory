<template lang="pug">
  .wrapper
    p Products count: {{ productsQty }}
    p Rooms count: {{ roomsQty }}
    router-view
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    productsQty () {
      return this.$store.getters['products/itemsQty']
    },
    roomsQty () {
      return this.$store.getters['rooms/itemsQty']
    }
  },
  created () {
    this.$store.dispatch('products/init')
    this.$store.dispatch('rooms/init')
  }
}
</script>
