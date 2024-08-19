<template>
    <div class=" px-6 xl:px-[200px] md:px-10 h-auto lg:mb-40">
        <div v-motion="SLIDE_RIGHT" class="">
            <h1 class="text-[30px] font-semibold text-brg-primary-dark">
                    Impact Barong
                </h1>
                <h2 class="text-[15px] text-gray-400 mb-8">
                    Dampak yang Barong berikan terhadap pengepul, masyarakat, dan lingkungan
                </h2>
        </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8">
        <div v-motion-slide-visible-once-bottom :delay="300" class="mb-5">
            <div class="relative">
                <NuxtImg class="w-full" src="/assets/impact1.png"/>
                <div class="absolute inset-0 flex items-start flex-col bg-black bg-opacity-30 rounded-[30px] p-7">
                    <h3 class="text-white text-[14px] font-semibold mb-2">Pengepul</h3>
                    <div class="w-12 border-t-2 border-white"></div>
                </div>
            </div>
            <div class="py-4">
            <h3 class="text-[18px] font-semibold text-brg-primary-dark mb-4">Optimalisasi Operasional</h3>
            <p class="text-brg-gray text-[15px]">
                Aplikasi Barong meningkatkan efisiensi dan produktivitas pengepul dengan sistem pengumpulan yang terstruktur, membantu mereka mengelola waktu dan sumber daya lebih baik, serta meningkatkan pendapatan secara signifikan.
            </p>
        </div>
        </div>
        <div v-motion-slide-visible-once-top :delay="300" class="mb-5">
            <div class="relative ">
                <NuxtImg class="w-full" src="/assets/impact2.png"/>
                <div class="absolute inset-0 flex items-start flex-col bg-black bg-opacity-30 rounded-[30px] p-7">
                    <h3 class="text-white text-[14px] font-semibold mb-2">Masyarakat</h3>
                    <div class="w-12 border-t-2 border-white"></div>
                </div>
            </div>
            <div class="py-4">
            <h3 class="text-[18px] font-semibold text-brg-primary-dark mb-4">Kemudahan dan Keterjangkauan</h3>
            <p class="text-brg-gray text-[15px]">
                Masyarakat kini dapat dengan mudah menjual barang rongsok mereka melalui aplikasi Barong, mendapatkan penghasilan tambahan sambil 
                turut berpartisipasi dalam upaya daur ulang. 
                Proses yang cepat dan transparan memastikan kenyamanan dan kepercayaan pengguna.
            </p>
        </div>
        </div>
        <div v-motion-slide-visible-once-bottom :delay="300" class="mb-5">
            <div class=" relative ">
                <NuxtImg class="w-full" src="/assets/impact3.png"/>
                <div class="absolute inset-0 flex items-start flex-col bg-black bg-opacity-25 rounded-[30px] p-7">
                    <h3 class="text-white text-[14px] font-semibold mb-2">Lingkungan</h3>
                    <div class="w-12 border-t-2 border-white"></div>
                </div>
            </div>
            <div class="py-4">
            <h3 class="text-[18px] font-semibold text-brg-primary-dark mb-4">Kontribusi Ekosistem Berkelanjutan</h3>
            <p class="text-brg-gray text-[15px]">
                Dengan mempromosikan praktik daur ulang yang lebih luas, aplikasi Barong membantu mengurangi limbah yang berakhir di tempat pembuangan akhir, mendukung ekonomi sirkular, dan berkontribusi pada pelestarian lingkungan yang lebih bersih dan sehat.
            </p>
        </div>
        </div>
    </div>
</div>
</template>