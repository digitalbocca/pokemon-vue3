<template lang="pug">

card
  template.image(#image)
    load-more-icon.load-more-icon
  template(#title)
    p Carregar mais
  template(#description)

</template>

<script setup>

import Card from '@/components/card.vue'
import LoadMoreIcon from '@/components/icons/load-more.vue'

</script>

<style lang="sass" scoped>

.load-more-icon
  width: 80%
  margin: 0 auto
  max-height: 40px

</style>