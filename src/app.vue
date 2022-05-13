<template lang="pug">

.home
  top-bar
  .home__content
    .search
      p Search
    .cards-container
      .cards
        card(v-for="pokemon, id in pokemons" :key="id")
          template.image(#image)
            img.poke-avatar(:src="pokemon.img")
          template(#title)
            p {{ pokemon.name }}
          template(#description)
            p Cód: {{ pokemon.id }}
        load-more
  
</template>

<script setup>

import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

import TopBar from '@/components/top-bar.vue'
import Card from '@/components/card.vue'
import LoadMore from '@/components/load-more.vue'

const store = useStore()

const pokemons = computed(() => store.state.pokemons)

onMounted(() => {
  store.dispatch('fetchPokemons')
})

</script>

<style lang="sass">

.home
  @apply flex flex-col items-center justify-center

  .home__content
    @apply flex flex-col items-center justify-center
    @apply p-4 m-4
    @apply w-full

  .cards-container
    @apply flex justify-center
    @apply w-full

    .cards
      @apply flex flex-wrap content-start
      @apply w-full

      max-width: 850px

</style>