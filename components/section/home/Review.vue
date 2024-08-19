<template>
  <div class="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 text-xl md:text-2xl lg:text-3xl font-bold text-center text-brg-secondary-dark">
    <h2 v-motion="SLIDE_TOP">Ulasan Pengguna</h2>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-3 md:gap-5 lg:gap-x-5 xl:gap-x-10 my-16 sm:mt-12 md:mt-16 lg:mt-20 sm:mb-32 px-6 sm:px-14 h-full">
    <CardReviewV1 v-motion-slide-visible-once-bottom :delay="300" class="hover:!transform hover:!scale-105 hover:!duration-700"/>

    <CardReviewV2  v-motion-slide-visible-once-top :delay="300" class="hover:!transform hover:!scale-105 hover:!duration-700"/>

    <CardReviewV3 v-motion-slide-visible-once-bottom :delay="300" class="hover:!transform hover:!scale-105 hover:!duration-700"/>

    <CardReviewV4  v-motion-slide-visible-once-top :delay="300" class="hover:!transform hover:!scale-105 hover:!duration-700"/>
  </div>
</template>
