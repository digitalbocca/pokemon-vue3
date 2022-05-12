<template lang="pug">

.home
  top-bar
  .content
    .search
      p Search
    .cards
      p Cards
  
</template>

<script setup>

import TopBar from './components/top-bar.vue'

</script>

<style lang="sass">

.home
  @apply flex flex-col items-center justify-center

</style>