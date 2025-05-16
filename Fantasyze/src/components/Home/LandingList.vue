<template>
  <div class="py-2" v-for="hero in heroes">
    <div :key="hero.id" class="w-full p-8 bg-linear-to-r from-gray-800 to-black-900">
      <div>
        <h1>{{ hero.name }}</h1>
        <p>{{ hero.description }}</p>
        <img v-if="hero.image" :src="`data:image/png;base64,${hero.image}`" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from '@/helpers/interfaces/heroes'

defineProps({
  heroes: {
    type: Array<Hero>,
    required: true,
  },
})
</script>
