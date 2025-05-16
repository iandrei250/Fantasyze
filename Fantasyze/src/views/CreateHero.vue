<template>
  <Button class="margin-auto border-2 border-solid p-2 rounded-xl bg-white text-black">
    <RouterLink to="/"> Go Back </RouterLink>
  </Button>
  <div class="container flex justify-center w-svw p-8">
    <CreateHeroForm />
  </div>
</template>

<script setup lang="ts">
import CreateHeroForm from '@/components/Create/CreateHeroForm.vue'
import { Button } from 'primevue'
</script>
