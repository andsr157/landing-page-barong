<script setup lang="ts">

const images = {
  block1: ['/home/images/Hero1.png', '/home/images/Hero2.png', '/home/images/Hero3.png'],
  block2: ['/home/images/Hero4.png', '/home/images/Hero5.png', '/home/images/Hero6.png'],
  block3: ['/home/images/Hero7.png', '/home/images/Hero2.png', '/home/images/Hero1.png'],
}
</script>

<template>
  <div class="w-full h-[85vh] md:h-[75vh] xl:h-[85vh] min-[1440px]:h-[90vh] relative flex overflow-hidden">
    <div v-motion="SLIDE_RIGHT" class="relative -top-20 sm:-top-28 lg:-top-52 xl:-top-45 min-[1440px]:-top-36 left-2 sm:left-0 lg:left-[380px] xl:left-[360px] min-[1440px]:left-[320px] w-full max-w-[2560px] h-[800px] xl:h-[840px] flex justify-end gap-16 overflow-hidden">
      <div class="flex flex-col gap-y-4 transform rotate-[30deg]">
        <SwiperHero reverse-direction :images="images.block2" />
      </div>
      <div class=" flex flex-col gap-y-4 transform rotate-[30deg]">
        <SwiperHero :images="images.block1" />
      </div>
      <div class=" flex flex-col gap-y-4 transform rotate-[30deg]">
        <SwiperHero reverse-direction :images="images.block3"/>
      </div>
    </div>

    <div class="absolute z-10 lg:pt-[72px] xl:pt-20 w-full lg:w-1/2">
      <div class="absolute top-0  h-[100vh] w-[100vw] bg-white bg-opacity-20 -z-0 block lg:hidden backdrop-blur-sm" />
      <div class="relative z-10 translate-y-1/3 lg:translate-y-0 lg:ps-16 xl:ps-32 w-[80%] md:w-[60%] lg:w-full mx-auto lg:mx-0 text-center lg:text-left">
        <h1 class="text-[28px] md:text-3xl lg:text-[40px] xl:text-5xl min-[1440px]:text-6xl font-bold text-brg-secondary-dark" v-motion="SLIDE_TOP">
          Temukan Nilai Disetiap Rongsok
        </h1>
        <p class="text-md sm:text-[18px] xl:text-xl min-[1440px]:text-2xl font-medium text-brg-secondary-dark mt-8 md:mt-10 xl:mt-16" v-motion="SLIDE_TOP">
          Daur ulang bersama kami! Ubah sampah jadi penghasilan, dan berkontribusi menciptakan lingkungan yang lebih bersih dan hijau.
        </p>

        <p class="lg:text-xl xl:text-2xl min-[1440px]:text-2xl italic font-semibold text-brg-primary mt-10" v-motion="SLIDE_TOP">
          #rongsokmania
        </p>
      </div>
    </div>
  </div>
</template>
