<template lang="pug">

.card
  .card__image
    slot(name="image")
  .card__content
    slot(name="title")
  .card__description
    slot(name="description")

</template>

<script>

</script>

<style lang="sass">

.card
  @apply flex flex-col items-center justify-center
  @apply p-4 m-2
  @apply bg-white
  @apply rounded-lg
  @apply drop-shadow

  width: 153px
  height: 190px

  .card__image
    @apply grow

    .poke-avatar
      fit-object: cover

</style>