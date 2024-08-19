<script setup lang="ts">
withDefaults(defineProps<{
  reverseDirection?: boolean
  images?: string[]
}>(), {
  reverseDirection: false,
})

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const modules = [Autoplay]
</script>

<template>
  <div class="h-full">
    <Swiper
      :slides-per-view="1.8"
      :breakpoints="{
        320: {
          slidesPerView: 2.4,
        },
        768: {
          slidesPerView: 2.1,
        },
        1024: {
          slidesPerView: 2.075,
        },
        1280: {
          slidesPerView: 1.8,
        },
      }"
      direction="vertical"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection,
      }"
      :modules="modules"
      :speed="5000"
      class="max-w-max h-[968px]  "
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <div
          class="w-44 h-96 md:w-[224px] md:h-[440px] xl:w-[269px] xl:h-[519px] rounded-lg border-2 border-brg-primary"
        >
          <NuxtImg :src="image" width="270px" format="webp" height="524px" class="object-contain"/>
        </div>
      </swiperslide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper-slide {
  will-change: transform;
  transition: transform 0.5s ease-out;
}
</style>
