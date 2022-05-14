<template lang="pug">

.home
  .search
    input.search(type="text", placeholder="Pesquisar por Nome ou Codigo", v-model="store.search")
  .cards-container
    .cards
      card(
          v-for="pokemon, id in filteredPokemons"
          :key="id"
          @click="gotoDetails(pokemon.id)"
        )
        template.image(#image)
          img.poke-avatar(:src="pokemon.img")
        template(#title)
          p.poke-name {{ pokemon.name }}
        template(#description)
          p.poke-cod Cód: {{ pokemon.id }}
      load-more(v-if="loadMoreIsVisible && isLoading")
      load-more(v-if="loadMoreIsVisible" @click="loadMore()")
  
</template>

<script setup>

import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import TopBar from '@/components/top-bar.vue'
import Card from '@/components/card.vue'
import LoadMore from '@/components/load-more.vue'

import { GENERAL_LIMIT } from '@/constants'
import { useStore } from '@/store/pokemons'

const store = useStore()
const router = useRouter()

const pokemons = computed(() => store.getPokemons)
const pristine = computed(() => store.getPristine)
const isLoading = computed(() => store.loading)
const filteredPokemons = computed(() => store.filteredPokemons)

const loadMoreIsVisible = computed(() => pokemons.value.length < GENERAL_LIMIT)

const loadMore = store.fetchPokemons

const gotoDetails = id => {
  router.push(`/details/${id}`)
}

onMounted(() => {
  if (pristine.value) {
    store.fetchPokemons()
  }
})

</script>

<style lang="sass">

.home
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

      .poke-name
        @apply capitalize

        font-family: 'Mulish', sans-serif
        font-size: 14px
        font-weight: 700

      .poke-cod
        font-family: 'Quicksand', sans-serif
        font-size: 9px
        font-weight: 700
  
  .search
    @apply flex flex-row items-center justify-center
    @apply w-full
    @apply p-4 m-4

    max-width: 850px

    input
      @apply w-full
      @apply py-2 px-4 m-2
      @apply rounded-full
      @apply drop-shadow

</style>