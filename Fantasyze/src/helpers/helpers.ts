import type { Ref } from 'vue'
import type { Hero } from './interfaces/heroes'

export const createObjectURL = (file: File | null) => {
  return file ? URL.createObjectURL(file) : ''
}

export const handleFileUpload = (event: Event, hero: Ref<Hero>) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    hero.value.image = target.files[0]
  }
}
