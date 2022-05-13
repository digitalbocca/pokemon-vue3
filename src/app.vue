<template lang="pug">

.page
  top-bar
  router-view
  
</template>

<script setup>

import TopBar from '@/components/top-bar.vue'

</script>

<style lang="sass">

.page
  @apply flex flex-col items-center justify-center

</style>