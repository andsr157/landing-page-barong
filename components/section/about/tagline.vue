<template>
  <div class="mb-36 text-center px-6 sm:px-8 lg:px-24 xl:px-[200px]">
    <div class=" w-full flex justify-center">
      <NuxtImg v-motion="SLIDE_TOP" class="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[5%] mb-[30px]" src="/assets/logo.png" />
    </div>
    <div class="flex items-center justify-center mb-[50px]">
      <div class="border-t border-gray-300 w-10" />
      <span v-motion="SLIDE_TOP" class="mx-4 text-gray-400 font-semibold">ABOUT BARONG</span>
      <div class="border-t border-gray-300 w-10" />
    </div>
    <h1 v-motion="SLIDE_TOP" class="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-brg-primary mb-8 xl:mb-14">
      <!-- Berpartisipasi dalam rantai daur ulang. Setiap barang rongsok memiliki potensi untuk menjadi sumber penghasilan dan ciptakan lingkungan yang bersih bersama kami. -->
      Bersama kami, ciptakan lingkungan yang bersih dan berpartisipasi dalam rantai daur ulang
    </h1>
    <p v-motion="SLIDE_TOP" class="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-gray-400">
      Aplikasi Barong ini bertujuan
      untuk memudahkan pengepul barang rongsok dalam meningkatkan efisiensi
      pengumpulan barang rongsok dan membantu meningkatkan pelayanan dalam proses
      pengumpulan barang rongsok agar dapat memaksimalkan pendapatan. Aplikasi ini juga
      akan memfasilitasi masyarakat untuk menjual barang rongsok yang dimiliki dengan
      lebih mudah dan cepat.
    </p>
  </div>
</template>


