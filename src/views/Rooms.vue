<template lang="pug">
  .wrapper
    h1 Rooms
    ul
      li(v-for="room in rooms") {{room.title}}
</template>

<script>
import Api from '@/api/entities'

export default {
  name: 'Rooms',
  computed: {
    api () {
      return Api('rooms')
    },
    rooms () {
      return this.$store.getters['rooms/items']
    }
  }
}
</script>
