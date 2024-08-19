<template>
  <div class="relative w-full h-full overflow-hidden text-white bg-gradient-to-t from-zinc-700 via-brg-primary to-brg-secondary flex flex-col justify-between px-6 py-6 rounded-[20px] backdrop-opacity-5">
    <div class="absolute -z-10 bg-[url('/home/images/Review3.webp')] bg-cover bg-no-repeat top-0 -left-1/2 translate-x-1/2 w-full h-full backdrop-brightness-75" />
    <div class="flex justify-between items-center">
      <div class="relative max-w-max text-white">
        <NuxtImg src="/home/vektor/review-rate-frame2.svg" />
        <span class="absolute top-1/2 -translate-y-1/2 text-[10px] text-brg-primary-dark left-1/2 -translate-x-1/2 font-semibold">10</span>
      </div>
      <div class="px-4 py-1 bg-brg-secondary rounded-3xl text-[10px]">
        <span>4.2</span> <span>  <VIcon name="ri:star-s-fill" size="xs" /></span>
      </div>
    </div>

    <div>
      <div class="mb-8 mt-3">
        <h4 class="font-semibold ">
          Good Work
        </h4>
        <p class="text-xs mt-5">
          Saya senang sekali bisa menjual
          barang rongsok di aplikasi barong,
          pengepulnya juga ramah-ramah dan
          on time pengambilannya
        </p>
      </div>
      <div>
        <p class="text-sm font-semibold ">
          Hasan Najib
        </p>
        <span class="text-xs font-light ">Ibu Rumah Tangga</span>
      </div>
    </div>
  </div>
</template>
