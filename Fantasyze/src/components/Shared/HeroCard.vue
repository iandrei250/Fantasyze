<template>
  <div
    class="w-[220px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      class="rounded-t-lg w-full h-[250px]"
      :src="`data:image/png;base64,${hero.image}`"
      alt="hero-image"
    />

    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ hero.name }}
        </h5>
      </a>
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
