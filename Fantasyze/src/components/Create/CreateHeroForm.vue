<template>
  <div class="w-1/2 bg-gray-800 p-8 rounded-lg h-fit flex flex-col gap-10">
    <div class="sm:col-span-4">
      <label for="username" class="block text-sm/6 font-medium">Character name</label>
      <div class="mt-2">
        <div
          class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600"
        >
          <input
            type="text"
            name="username"
            id="username"
            v-model="hero.name"
            class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder=""
          />
        </div>
      </div>
    </div>

    <div class="col-span-full">
      <label for="about" class="block text-sm/6 font-medium">Description</label>
      <div class="mt-2">
        <textarea
          name="about"
          id="about"
          rows="3"
          v-model="hero.description"
          class="block w-full rounded-md text-black bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        ></textarea>
      </div>
    </div>
    <div class="flex justify-center w-full flex-col">
      <label for="about" class="block text-sm/6 font-medium">Character image</label>
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
      </label>
    </div>
    <div
      v-if="!isLoading"
      class="margin-auto border-2 border-solid p-2 rounded-md bg-white text-black w-fit cursor-pointer hover:bg-gray-200"
      @click="submitForm()"
    >
      Create Character
    </div>
    <div v-else="isLoading">
      <Loader />
    </div>
  </div>
</template>

<script setup lang="ts">
import { createHero } from '@/helpers/api/heroesApiRequests'
import { ref } from 'vue'
import Loader from '../Shared/Loader.vue'

const isLoading = ref<boolean>(false)
const hero = ref({
  name: '',
  description: '',
  image: null as File | null,
})

function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    hero.value.image = target.files[0]
  }
}

function submitForm() {
  isLoading.value = true
  const formData = new FormData()
  formData.append('name', hero.value.name)
  formData.append('description', hero.value.description)
  if (hero.value.image) {
    formData.append('image', hero.value.image)
  }
  createHero(formData).finally(() => {
    isLoading.value = false
  })
}
</script>
