<script setup lang="ts">
import {
  landingPageDescription,
  landingPage,
  landingPageSubText,
} from '@/helpers/constants/constants'
import type { Hero } from '@/helpers/interfaces/heroes'
import axios from 'axios'
import { Card } from 'primevue'
import { ref, onMounted } from 'vue'

const heroes = ref<Hero[]>([])
const error = ref<string | null>(null)
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5162/api/heroes')
    heroes.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch heroes: ' + (err as Error).message
  }
})
</script>

<template>
  <div class="container p-8">
    <h1 class="text-6xl font-bold tracking-tight text-balance text-center">
      {{ landingPage }}
    </h1>
    <h2 class="p-8 text-2xl font-medium text-pretty sm:text-xl/8 text-center">
      {{ landingPageDescription }}
    </h2>
    <h3 class="text-md font-regular text-pretty sm:text-xl/8 text-center">
      {{ landingPageSubText }}
    </h3>
  </div>
  <div class="py-2" v-for="hero in heroes">
    <div :key="hero.id" class="w-full p-8 bg-linear-to-r from-gray-800 to-black-900">
      <div>
        <h1>{{ hero.name }}</h1>
        <p>{{ hero.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
