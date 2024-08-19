<template>
  <div class="w-[100vw] overflow-x-hidden grid sm:grid-cols-2 items-center bg-brg-white mt-40 md:ps-14 lg:ps-24">
    <div class="sm:w-[90%] md:w-[80%] xl:w-[90%] py-14 order-2 sm:order-1 px-10 md:px-0"  v-motion="SLIDE_RIGHT">
      <h3 class="text-2xl sm:text-xl md:text-2xl  lg:text-3xl xl:text-[40px] font-bold text-brg-primary">
        Jadilah Mitra Pengepul Kami!
      </h3>
      <p class="sm:text-sm md:text-base lg:text-md xl:text-xl text-brg-dark-gray mt-6 mb-6 lg:mb-12">
        Anda adalah seorang pengepul rongsok atau berminat menjadi pengepul rongsok. Bergabunglah dengan jaringan mitra pengepul kami dan nikmati berbagai manfaat serta dukungan dari kami.
      </p>
      <a href="https://wa.me/6289523059093?text=Saya Tertarik Menjadi Pengepul" target="_blank">
        <VBtn no-ring outlined class=" !text-brg-primary !border-2 !border-brg-primary hover:!bg-brg-primary hover:!text-white !text-xs md:!text-base !py-4 !px-8 !rounded-[20px] max-w-max">
          Daftar
        </VBtn>
      </a>
    </div>
    <div class="w-full h-[40vh] sm:h-full order-1 sm:order-2" v-motion="SLIDE_LEFT" >
      <NuxtImg loading="lazy" src="/home/images/Cta1.png" class="w-full h-full object-cover" />
    </div>
  </div>
</template>
