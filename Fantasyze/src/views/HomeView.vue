<script setup lang="ts">
import LandingList from '@/components/Home/LandingList.vue'
import { getHeroes } from '@/helpers/api/heroesApiRequests'
import {
  landingPageDescription,
  landingPage,
  landingPageSubText,
} from '@/helpers/constants/constants'
import type { Hero } from '@/helpers/interfaces/heroes'
import { ref, onMounted } from 'vue'

const heroes = ref<Hero[]>([])

onMounted(async () => {
  heroes.value = await getHeroes()
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
  <div class="container p-8 flex items-center justify-center">
    <LandingList :heroes="heroes" />
  </div>
</template>
