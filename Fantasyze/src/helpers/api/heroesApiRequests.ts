import axios from 'axios'
import type { Hero } from '../interfaces/heroes'

export const getHeroes: () => Promise<Hero[]> = async () => {
  try {
    const response = await axios.get('http://localhost:5162/api/heroes')
    return response.data
  } catch (err) {
    throw 'Failed to fetch heroes: ' + (err as Error).message
  }
}

export const createHero = async (hero: Hero) => {
  try {
    const response = await axios.post('http://localhost:5162/api/heroes', hero)
  } catch (err) {
    throw 'Failed to fetch heroes: ' + (err as Error).message
  }
}
