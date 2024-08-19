<template>
  <div class="w-full flex flex-col gap-y-5 justify-center items-center py-28 bg-brg-primary">
    <h2 v-motion="SLIDE_TOP" class="w-[90%] sm:w-[60%] md:w-[50%] text-md sm:text-xl lg:text-3xl xl:text-[40px] font-bold text-white text-center">
      Jual Rongsokmu Sekarang dan Ikut Berpartisipasi Dalam Rantai Daur Ulang
    </h2>
    <a href="https://barong-psi.vercel.app" target="_blank">
      <VBtn v-motion="SLIDE_TOP"  no-ring class="!bg-white  !text-brg-primary hover:!bg-slate-300 !text-xs md:!text-base py-4  !rounded-lg max-w-max">
        Mulai Sekarang
      </VBtn>
    </a>
  </div>
</template>
