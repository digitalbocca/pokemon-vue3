import { defineStore } from 'pinia'
import axios from 'axios'
import { API_URL, PAGE_OFFSET, GENERAL_LIMIT } from '@/constants'

export const useStore = defineStore('pokemon', {
  state () {
    return {
      pokemons: [],
      loading: false,
      search: ''
    }
  },
  getters: {
    getPokemons: state => state.pokemons,
    filteredPokemons: state => {
      const nameFilter = el => {
        return el.name.includes(state.search)
      }

      const codFilter = el => {
        return el.id.toString().includes(state.search)
      }

      const nameSearch = state.pokemons.filter(nameFilter)
      const codSearch = state.pokemons.filter(codFilter)

      if (nameSearch.length) {
        return nameSearch
      }
      
      if (codSearch.length) {
        return codSearch
      }
      
      return state.pokemons
    }
  },
  actions: {
    async fetchPokemons () {
      try {
        this.loading = true
        const currentSize = this.pokemons.length
        const requestOffset = currentSize + PAGE_OFFSET > GENERAL_LIMIT ? GENERAL_LIMIT - currentSize : PAGE_OFFSET
        const { data } = await axios.get(API_URL, {
          params: {
            limit: requestOffset,
            offset: currentSize
          }
        })
  
        const completePokemons = data.results.map(pokemon => {
          const id = pokemon.url.split('/').filter(el => el.length).pop()
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  
          return {
            ...pokemon,
            id,
            img
          }
        })
  
        this.pokemons.push(...completePokemons)
      } catch (e) {
        console.error(e.message)
      } finally {
        this.loading = false
      }
    }
  }
})
