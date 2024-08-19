<script>
export default {
  data() {
    return {
      activeTab: 'mission',
    }
  },
  computed: {
    getTittle() {
      switch (this.activeTab) {
        case 'mission':
          return 'Misi Barong'
        case 'goal':
          return 'Tujuan Barong'
        default:
          return 'Misi Barong'
      }
    },
  },
}
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between px-6 md:px-10 lg:20px xl:px-[200px] gap-8 mb-40 md:mb-8 lg:mb-40 h-auto">
    <div class="md:w-full lg:w-1/2 mb-2 md:mb-0">
      <NuxtImg v-motion="SLIDE_RIGHT" class="w-full shadow-lg rounded-xl hover:!transform hover:!scale-105 hover:!duration-700" src="/assets/profile.jpg" />
    </div>
    <div class="md:w-full lg:w-1/2 ">
      <div class="">
        <div class="flex gap-3 mb-8 md:my-6">
          <button
            v-motion="SLIDE_TOP"
            class="py-2   rounded-2xl w-full md:w-[130px] sm:text-[12px] md:text-[14px] lg:text-[18px] hover:!transform hover:!scale-105 hover:!duration-500"
            :class="{ 'bg-brg-primary text-white': activeTab === 'mission', 'text-brg-primary-dark border border-brg-primary': activeTab !== 'mission' }"
            @click="activeTab = 'mission'"
          >
            Mission
          </button>
          <button
            v-motion="SLIDE_TOP"
            class=" py-2   rounded-2xl w-full md:w-[130px] sm:text-[12px] md:text-[14px] lg:text-[18px] hover:!transform hover:!scale-105 hover:!duration-500"
            :class="{ 'bg-brg-primary text-white': activeTab === 'goal', 'text-brg-primary-dark border border-brg-primary': activeTab !== 'goal' }"
            @click="activeTab = 'goal'"
          >
            Goal
          </button>
        </div>
        <div class=" text-wrap">
          <h2 v-motion="SLIDE_LEFT" class=" text-[20px] md:text-[25px] my-4 font-semibold text-brg-primary-dark mb-4">
            {{ getTittle }}
          </h2>
          <p v-motion="SLIDE_LEFT" v-if="activeTab === 'mission'" class="text-brg-primary-dark leading-6 text-justify text-sm sm:text-[15px] md:text-[13px] lg:text-[13px] xl:text-[15px]">
            Misi jangka panjang kami adalah menjadi platform utama yang memfasilitasi transaksi barang rongsok antara pengepul dan masyarakat.
            Kami berkomitmen untuk menciptakan ekosistem yang berkelanjutan, di mana pengepul dapat mengoptimalkan operasional mereka dan masyarakat dapat dengan mudah menjual barang rongsok.
            Dengan Barong, kami beraspirasi untuk mendukung pertumbuhan ekonomi sirkular dan memberdayakan komunitas pengepul untuk mencapai kesuksesan yang berkelanjutan.
          </p>
          <p v-motion="SLIDE_LEFT" v-if="activeTab === 'goal'" class="text-brg-primary-dark leading-6 text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-[15px]">
            Aplikasi Barong bertujuan untuk meningkatkan efisiensi dan produktivitas pengepul dalam pengumpulan barang rongsok. Dalam jangka pendek, kami fokus pada memaksimalkan pendapatan pengepul melalui proses pengumpulan yang lebih terstruktur dan terorganisir.
            Kami juga berupaya meningkatkan kualitas pelayanan pengepul kepada masyarakat, memastikan bahwa proses pengumpulan barang rongsok menjadi lebih cepat, mudah, dan efisien.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
