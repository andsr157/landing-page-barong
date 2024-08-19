<script setup lang="ts">
import Data from './HowItWorks.json'

const HowItWorks = Data
</script>

<template>
  <div class="w-[100vw] overflow-x-hidden py-16 sm:py-20 md:py-24 lg:pt-32 text-xl md:text-2xl lg:text-3xl font-bold text-center text-brg-secondary-dark">
    <h2 v-motion="SLIDE_TOP">Cara Kerja</h2>
  </div>
  <div class=" flex flex-col justify-center items-center py-0 lg:py-32 min-[1440px]:ps-16 overflow-hidden">
    <HowItWork
      v-for="(data, index) in HowItWorks"
      :key="index"
      :title="data.title"
      :desc="data.desc"
      :image="data.image"
      :reverse="data.reverse"
      class="mb-5 sm:mb-10"
      :class="`${data.reverse ? 'lg:ms-12' : ''}`"
    />
  </div>
</template>
