import axios from 'axios'
import { API_URL } from '@/constants'

export default {
  async fetchPokemons ({ commit }) {
    try {
      const { data } = await axios.get(API_URL)

      const completePokemons = data.results.map(pokemon => {
        const id = pokemon.url.split('/').filter(el => el.length).pop()
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return {
          ...pokemon,
          id,
          img
        }
      })

      commit('SET_POKEMONS', completePokemons)
    } catch (e) {
      console.error(e.message)
    }
  }
}
