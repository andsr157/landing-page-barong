<script setup lang="ts">
defineProps<{
  name: string
  role: string
  star: number
  rate?: number
  withRate?: boolean
  small?: boolean
  wrapperClass?: string
  roleColor?: string
}>()
</script>

<template>
  <div class="flex gap-x-8" :class="wrapperClass">
    <div class="flex justify-end items-center max-w-max">
      <img :src="`${small ? '/home/images/Review2.png' : '/home/images/Review1.png'}`">
      <div v-if="withRate" class="relative max-w-max -ms-10 -bottom-[40%] -translate-y-[40%]">
        <img src="/home/vektor/review-rate-frame1.svg" class="">
        <span class="absolute top-1/2 -translate-y-1/2 text-[10px] left-1/2 -translate-x-1/2 font-semibold">{{ rate }}</span>
      </div>
    </div>
    <div class="py-3">
      <h4 class="text-sm font-semibold">
        {{ name }}
      </h4>
      <p class="text-xs font-light" :class="roleColor">
        {{ role }}
      </p>
      <VIcon v-for="i in star" :key="i" name="ri:star-s-fill" size="xs" />
    </div>
  </div>
</template>
