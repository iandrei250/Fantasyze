<template>
  <div :key="hero.id" class="w-full p-8 relative">
    <div class="absolute w-3xs h-30">
      <h1 class="top-50% left-50%">{{ hero.name }}</h1>
      <p>{{ hero.description }}</p>
      <img v-if="hero.image" :src="`data:image/png;base64,${hero.image}`" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from '@/helpers/interfaces/heroes'
import type { PropType } from 'vue'

defineProps({
  hero: {
    type: Object as PropType<Hero>,
    required: true,
  },
})
</script>
