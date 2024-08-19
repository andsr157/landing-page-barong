<script setup lang="ts">
defineProps<{
  title: string
  desc: string
  image: string
  reverse?: boolean
}>()
</script>

<template>
  <div class="flex justify-center w-full relative" :class="`${reverse ? 'right-1/3 translate-x-1/4' : 'left-1/3 -translate-x-1/4'}`">
    <div class="flex flex-col gap-y-6" :class="`${reverse ? 'order-2 ms-4 sm:ms-0' : 'order-1'}`">
      <div class="relative max-w-max" v-motion="reverse ? SLIDE_LEFT : SLIDE_RIGHT">
        <NuxtImg src="/home/images/marker.svg" class="md:w-44 md:h-24 lg:w-60 lg:h-32" />
        <div
          class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl md:text-2xl lg:text-3xl font-bold text-brg-secondary-dark
        "
        >
          {{ title }}
        </div>
      </div>
      <p class="text-sm sm:text-base lg:text-xl font-medium text-brg-dark-gray w-full md:w-80 lg:w-[400px]" v-motion="reverse ? SLIDE_LEFT : SLIDE_RIGHT">
        {{ desc }}
      </p>
      <div :class="`${title === 'Dapatkan Uang' ? 'hidden sm:flex' : 'flex'} ${reverse ? 'lg:justify-start' : 'min-[420px]:justify-end min-[420px]:pe-7 sm:pe-10'}`">
        <NuxtImg v-motion-roll-visible-once-left :delay="600"
          v-if="reverse"
          src="/home/vektor/arrow-left.svg"
          class="-ms-10 w-28 h-20 min-[420px]:w-36 min-[420px]:h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 lg:w-[224px] lg:h-[196px] "
        />

        <NuxtImg
        v-motion-roll-visible-once-right :delay="600"
          v-else
          src="/home/vektor/arrow-right.svg"
          class="-me-10 w-28 h-20 min-[420px]:w-36 min-[420px]:h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 lg:w-[224px] lg:h-[196px] "
        />
      </div>
    </div>
    <div class="w-[70vw] pt-10 sm:w-[70vw] md:w-auto max-h-max -mt-10 shrink-0 md:shrink" :class="`${reverse ? 'order-1 -me-16 md:-me-20' : 'order-2 -ms-12 md:-ms-20'}`">
      <NuxtImg loading="lazy" format="webp" :src="image" width="826px" height="826px" class="!object-contain" v-motion="reverse ? SLIDE_RIGHT : SLIDE_LEFT"/>
    </div>
  </div>
</template>
