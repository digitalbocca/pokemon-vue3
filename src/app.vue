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
            img.poke-avatar(:src="pokemon.image")
          template(#title)
            p {{ pokemon.name }}
          template(#description)
            p {{ pokemon.type }}
  
</template>

<script setup>

import TopBar from '@/components/top-bar.vue'
import Card from '@/components/card.vue'

const pokemons = [
  { name: 'bulbasaur', type: 'grass', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { name: 'ivysaur', type: 'grass', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
  { name: 'venusaur', type: 'grass', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  { name: 'charmander', type: 'fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { name: 'charmeleon', type: 'fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
  { name: 'charizard', type: 'fire', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  { name: 'squirtle', type: 'water', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { name: 'wartortle', type: 'water', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
  { name: 'blastoise', type: 'water', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
  { name: 'caterpie', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
  { name: 'metapod', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
  { name: 'butterfree', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
  { name: 'weedle', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
  { name: 'kakuna', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
  { name: 'beedrill', type: 'bug', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
  { name: 'pidgey', type: 'flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
  { name: 'pidgeotto', type: 'flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
  { name: 'pidgeot', type: 'flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
  { name: 'rattata', type: 'normal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
  { name: 'raticate', type: 'normal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' },
  { name: 'spearow', type: 'flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png' },
  { name: 'fearow', type: 'flying', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png' },
  { name: 'ekans', type: 'poison', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png' },
]

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