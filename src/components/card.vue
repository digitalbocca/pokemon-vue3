<template lang="pug">

.card
  slot(name="image")
  slot(name="title")
  slot(name="description")

</template>

<script>

</script>

<style lang="sass">

.card
  @apply flex flex-col items-center justify-center
  @apply p-4 m-4
  @apply bg-white
  @apply rounded-lg
  @apply drop-shadow

</style>