
<template>
  <div>
    <h2>Heroes</h2>
    <p v-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="hero in heroes" :key="hero.id">{{ hero.name }}</li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted } from 'vue';
import axios from 'axios'
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

