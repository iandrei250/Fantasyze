<template>
  <Navigation />
  <HomeView />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HomeView from './views/HomeView.vue'
import Navigation from './components/Navigation.vue'
const heroes = ref([])
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

<style></style>
