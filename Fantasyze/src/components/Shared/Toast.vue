<template>
  <div
    id="toast-top-right"
    class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-black divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm top-5 right-5 bg-white"
    role="alert"
  >
    <div class="text-sm font-normal">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
})
</script>
