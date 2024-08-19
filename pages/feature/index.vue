<script setup lang="ts">
import dataFeatures from './feature.json'

const DataFeature = dataFeatures

const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Daftar Fitur - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = appConfig.description
const appImage = `${appDomain}/logo.svg`
const canonicalHref = useRoute().fullPath

useSeoMeta({
  title: appName,
  ogTitle: appName,
  description: appDescription,
  ogDescription: appDescription,
  ogUrl: appDomain,
  ogImage: appImage,
  twitterTitle: appName,
  twitterDescription: appDescription,
  twitterImage: appImage,
  twitterCard: 'summary_large_image',
})

useHead({
  title: appName,
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: `https://barongsolo.com${canonicalHref}`,
    },
  ],
  meta: [
      // WhatsApp meta tags
      {
        hid: 'whatsapp:title',
        property: 'whatsapp:title',
        content: appName,
      },
      {
        hid: 'whatsapp:description',
        property: 'whatsapp:description',
        content: appDescription,
      },
      {
        hid: 'whatsapp:image',
        property: 'whatsapp:image',
        content: appImage,
      },
      // Instagram meta tags
      {
        hid: 'instagram:title',
        property: 'instagram:title',
        content: appName,
      },
      {
        hid: 'instagram:description',
        property: 'instagram:description',
        content: appDescription,
      },
      {
        hid: 'instagram:image',
        property: 'instagram:image',
        content: appImage,
      },
      // WebShare meta tags
      {
        hid: 'webshare:title',
        property: 'webshare:title',
        content: appName,
      },
      {
        hid: 'webshare:description',
        property: 'webshare:description',
        content: appDescription,
      },
      {
        hid: 'webshare:image',
        property: 'webshare:image',
        content: appImage,
      },
    ],

})
</script>

<template>
  <div class="relative w-full h-[200px] sm:min-h-[400px] md:h-screen bg-cover bg-no-repeat bg-center" style="background-image: url('/assets/bg-fitur.jpg')">
    <div class="absolute inset-0 bg-[363F5E] bg-opacity-40 backdrop-blur-sm md:backdrop-blur-lg" />

    <div class="relative w-full h-full">
      <div class="flex flex-col justify-center items-center text-white w-full h-full">
        <h1 class="text-xl md:text-6xl font-bold mb-4 text-center">
          Panduan Fitur
        </h1>
        <h3 class="text-sm md:text-4xl font-medium text-center">
          List Fitur Aplikasi Barong
        </h3>
      </div>
    </div>
  </div>

  <div class="flex flex-col px-[30px] py-[45px] sm:py-[96px] sm:px-[56px] gap-4 sm:gap-10">
    <CardFitur
      v-for="(dataFeature, index) in DataFeature"
      :key="index"
      :title="dataFeature.title"
      :desc="dataFeature.desc"
      :items="dataFeature.items"
    />
  </div>
</template>
