<template>
  <div class="py-2" v-for="hero in heroes">
    <HeroCard :key="hero.id" :hero="hero" />
  </div>
</template>

<script setup lang="ts">
import type { Hero } from '@/helpers/interfaces/heroes'
import HeroCard from '../Shared/HeroCard.vue'

defineProps({
  heroes: {
    type: Array<Hero>,
    required: true,
  },
})
</script>
