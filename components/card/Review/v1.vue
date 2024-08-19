<template>
  <div class="overflow-hidden w-full h-[360px]' bg-brg-gray text-white py-6 rounded-[20px]">
    <CardReviewProfile
      name="Andika Satrio"
      role="Mahasiswa"
      with-rate
      :rate="10"
      :star="5"
      class="-ms-[8%] sm:-ms-[7%] lg:-ms-[12%]"
    />
    <div class="mt-3 px-8">
      <h4 class="font-semibold">
        Good Work
      </h4>
      <p class="text-xs pb-[72px]">
        Saya senang sekali bisa menjual
        barang rongsok di aplikasi barong,
        pengepulnya juga ramah-ramah dan
        on time pengambilannya
      </p>
    </div>
  </div>
</template>
