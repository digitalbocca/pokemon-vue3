<template lang="pug">

.home
  top-bar
  .home__content
    .search
      input(type="text", placeholder="Pesquisar por Nome ou Codigo", v-model="store.search")
      p {{ store.search }}
    .cards-container
      .cards
        card(v-for="pokemon, id in filteredPokemons" :key="id")
          template.image(#image)
            img.poke-avatar(:src="pokemon.img")
          template(#title)
            p {{ pokemon.name }}
          template(#description)
            p Cód: {{ pokemon.id }}
        load-more(v-if="loadMoreIsVisible && isLoading")
        load-more(v-if="loadMoreIsVisible" @click="loadMore()")
  
</template>

<script setup>

import { onMounted, computed } from 'vue'

import TopBar from '@/components/top-bar.vue'
import Card from '@/components/card.vue'
import LoadMore from '@/components/load-more.vue'

import { GENERAL_LIMIT } from '@/constants'
import { useStore } from '@/store/pokemons'

const store = useStore()

const pokemons = computed(() => store.getPokemons)
const isLoading = computed(() => store.loading)
const filteredPokemons = computed(() => store.filteredPokemons)

const loadMoreIsVisible = computed(() => pokemons.value.length < GENERAL_LIMIT)

const loadMore = store.fetchPokemons

onMounted(() => {
  store.fetchPokemons()
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