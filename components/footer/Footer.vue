<script setup lang="ts">
import footerLink from './footer.json'

const links = footerLink

const icons = [
  { name: 'ri:instagram-fill' , link:'https://www.instagram.com/barongsolo/' },
  { name: 'ri:facebook-circle-fill', link:"#" },
  { name: 'ri:youtube-fill', link:'#'},
  { name: 'ri:mail-fill' ,link:"mailto:barong.surakarta.adm@gmail.com"},
]
</script>

<template>
  <div class="px-6 lg:px-14 xl:px-28 bg-brg-primary">
    <div class="pt-10 pb-6 md:py-12 lg:flex items-start ">
      <div class="w-full lg:w-1/3 mb-8 lg:mb-5 text-white">
        <div class="flex gap-6 items-center justify-center lg:justify-normal">
          <NuxtImg src="/logo-white.svg" loading="lazy" quality="75" alt="Logo Gits"
            class="w-10 h-10 md:w-12 md:h-12" />
          <p class="text-xl md:text-2xl xl:text-3xl font-semibold">
            Barong
          </p>
        </div>
        <p
          class="mx-auto lg:mx-0 mt-5 lg:mt-8 lg:pe-10 xl:pe-16 w-[80%] sm:max-w-[450px] text-sm lg:text-base text-center lg:text-left leading-6">
          Website jual beli rongsok untuk melindungi lingkungan dan menciptakan daur ulang
        </p>
        <div class="mt-7">
          <p class="mb-3 text-sm sm:text-base text-center lg:text-left">
            Hubungi Kami
          </p>
          <div class="mb-4 lg:mb-0 flex gap-6 justify-center lg:justify-normal ">
            <a v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank">
              <VIcon :name="icon.name" class="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="w-full lg:w-2/3 ps-4 sm:ps-16 md:ps-28 lg:ps-0 flex gap-y-4 md:gap-8 xl:gap-32 flex-col sm:flex-row justify-center lg:justify-end  ">
        <div v-for="(link, index) in links" :key="index">
          <h3 class="text-sm sm:text-base mb-4 font-medium md:font-semibold text-white">
            {{ link.name }}
          </h3>
          <VList v-for="item in link.items" :key="item.name">
            <VListItem hide-prepend class="mb-[6px] cursor-pointer " :to="item.url">
              <p class=" text-xs sm:text-sm md:text-base max-w-56 xl:max-w-96 text-wrap">
                {{ item.name }}
              </p>
            </VListItem>
          </VList>
          <a v-show="index === 0" href="https://linktr.ee/barongsolo" target="_blank" class="cursor-pointer text-xs sm:text-sm md:text-base max-w-56 xl:max-w-96 text-wrap text-white">
            <p>
              Hubungi Kami
            </p>
          </a>
        </div>
      </div>
    </div>
    <div
      class=" pt-2 sm:pt-6 lg:pt-8 pb-4 sm:pb-12 text-xs md:text-sm lg:text-base text-center lg:text-right text-white border-t-2 border-white bg-brg-primary ">
      Copyright © 2024 Barong. All rights reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-list {
  --v-list-padding-x: 0;
}

.v-list .v-list-item {
  --v-list-item-color: white;
  --v-list-item-padding-y: 0;
  --v-list-item-padding-x: 0;
  --v-list-item-font-size: 16px;
  --v-list-item-font-weight: 400;
}

.v-list .v-list-item:hover {
  --v-list-item-color: #C1C9D6;
}

@media screen and (min-width: 768px) {
  .v-list .v-list-item {
    --v-list-item-font-size: var(--size-font-md);
  }
}

@media screen and (min-width: 1024px) {
  .v-list .v-list-item {
    --v-list-item-font-size: var(--size-font-sm);
  }
}

.v-icon:hover {
  color: #C1C9D6;
}
</style>
