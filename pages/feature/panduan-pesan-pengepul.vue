<script setup lang="ts">


const data = reactive([
  {
    id: 1,
    title: "Pilih Transaksi Yang Telah Diambil",
    desc: "Pilih Transaksi yang telah diambil pengepul , anda dapat melihat riwayat transaksi aktif atau pada halaman beranda   ",
    img: "/feature/chat-pengepul/image-1.png",
    isOpen: true
  },
  {
    id: 2,
    title:"Klik Ikon Chat Pojok Kanan Atas",
    desc: "Klik Ikon chat untuk menampilkan room chat dengan pengepul",
    img: "/feature/chat-pengepul/image-2.png",
    isOpen: false
  },
  {
    id: 3,
    title: "Kirim Pesan",
    desc: "Anda dapat mengirrimkan pesan kepada pengepul , isikan kolom pesan lalu klik ikon kirim",
    img: "/feature/chat-pengepul/image-3.png",
    isOpen: false
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan mengirim pesan ke pengepul - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam chat atau mengirim pesan kepada pengepul pada aplikasi barong'
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
  <div class="py-5 px-5 sm:px-10 sm:py-14 lg:py-16 lg:px-14 gap-16">
    <h1 class="font-bold text-xl sm:text-4xl text-brg-primary-dark">
      Panduan Chat Pengepul
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengirim pesan kepada pengepul
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>