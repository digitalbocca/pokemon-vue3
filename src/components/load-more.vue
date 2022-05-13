<template lang="pug">

card
  template.image(#image)
    load-more-icon.load-more-icon
  template(#title)
    p {{ isLoading ? 'Carregando...' : 'Carregar mais' }}
  template(#description)

</template>

<script setup>

import { computed } from 'vue'

import Card from '@/components/card.vue'
import LoadMoreIcon from '@/components/icons/load-more.vue'

import { useStore } from '@/store/pokemons'

const store = useStore()

const isLoading = computed(() => store.loading)

</script>

<style lang="sass" scoped>

.load-more-icon
  width: 80%
  margin: 0 auto
  max-height: 40px

</style>