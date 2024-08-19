<template>
  <div class="overflow-hidden flex flex-col justify-between w-full h-full px-6 text-white bg-brg-primary py-6 rounded-[20px]">
    <div>
      <div class="flex justify-between items-center">
        <div class="relative max-w-max">
          <NuxtImg src="/home/vektor/review-rate-frame2.svg" />
          <span class="absolute top-1/2 -translate-y-1/2 text-[10px] text-brg-primary left-1/2 -translate-x-1/2 font-semibold">10</span>
        </div>
        <div class="px-4 py-1 bg-transparent rounded-3xl text-[10px]">
          <span>4.2</span> <span>  <VIcon name="ri:star-s-fill" size="xs" /></span>
        </div>
      </div>

      <div class="mt-5">
        <h4 class="font-semibold">
          Good Work
        </h4>
        <p class="text-xs font-medium mt-5">
          Saya senang sekali bisa menjual
          barang rongsok di aplikasi barong,
          pengepulnya juga ramah-ramah dan
          on time pengambilannya
        </p>
      </div>
    </div>

    <div>
      <CardReviewProfile
        name="Andika Satrio"
        role="Mahasiswa"
        :star="5"
        small
        wrapper-class="!gap-x-4 !text-white"
      />
    </div>
  </div>
</template>
