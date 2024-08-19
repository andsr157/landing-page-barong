<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  desc: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to">
    <div
      class="w-full border-solid border-2 rounded-lg border-brg-primary-dark border-opacity-20 p-7 flex flex-col gap-5 hover:transform hover:scale-105 hover:duration-500 "
    >
      <div class="w-7 h-7 sm:w-12 sm:h-12">
        <NuxtImg :src="icon" class="w-full h-full object-contain" />
      </div>
      <div>
        <h1 class="font-semibold  text-base sm:text-lg mb-1 text-brg-primary-dark">
          {{ title }}
        </h1>
        <p class="text-sm sm:text-lg text-brg-primary-dark">
          {{ desc }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
