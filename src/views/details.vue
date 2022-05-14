<template lang="pug">

.details
  .card-lg
    div(v-if="pokemonData.loading")
      p Loading...
    div(v-else) 
      img(:src="pokemonData.pokemon.sprites.front_default" :alt="pokemonData.pokemon.name")
      p.capitalize Nome: {{ pokemonData.pokemon.name }}
      p Cód: {{ pokemonData.pokemon.id }}
      p.capitalize Tipo: {{ pokemonData.pokemon.types[0].type.name }}

  .card-lg
    div(v-if="pokemonData.loading")
      p Loading...
    div(v-else) 
      h2 Habilidades
      ul
        li.capitalize(v-for="ability, id in pokemonData.pokemon.abilities" :key="id")
          | {{ ability.ability.name }}

  .control
    button.btn(@click="router.back()") Voltar
  
</template>

<script setup>

import axios from 'axios'
import { onMounted, computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import TopBar from '@/components/top-bar.vue'

import { API_URL } from '@/constants';

const route = useRoute()
const router = useRouter()

const pokemonId = computed(() => route.params.pokemonId)
const pokemonData = reactive({
  pokemon: null,
  loading: true,
})

onMounted(async () => {
  try {
    const { data } = await axios.get(`${API_URL}/${pokemonId.value}`)
    pokemonData.pokemon = data
  } catch (e) {
    console.error(e)
  } finally {
    pokemonData.loading = false
  }
})

</script>

<style lang="sass">

.details
  @apply flex flex-col items-center justify-center
  @apply p-4 m-4
  @apply w-full

  .card-lg
    @apply flex flex-col justify-center items-center
    @apply p-4 m-4
    @apply w-full
    @apply rounded-lg
    @apply bg-white
    @apply drop-shadow
    @apply text-center

    max-width: 450px


</style>