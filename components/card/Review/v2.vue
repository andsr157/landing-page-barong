<template>
  <div class="overflow-hidden flex flex-col justify-between w-full h-full px-6 bg-white border-[1px] border-brg-primary py-6 rounded-[20px]">
    <div>
      <div class="relative max-w-max text-white">
        <NuxtImg src="/home/vektor/review-rate-frame1.svg" />
        <span class="absolute top-1/2 -translate-y-1/2 text-[10px] left-1/2 -translate-x-1/2 font-semibold">10</span>
      </div>
      <div class="mt-5">
        <h4 class="font-semibold text-brg-primary">
          Good Work
        </h4>
        <p class="text-xs font-medium text-brg-dark-gray mt-5">
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
        role-color="text-brg-dark-gray"
        :star="5"
        small
        wrapper-class="!gap-x-4 !text-brg-primary"
      />
    </div>
  </div>
</template>
