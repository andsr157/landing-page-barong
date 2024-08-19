<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Klik Ikon Pada Pojok Kiri Atas',
    desc: 'Klik pada ikon tersebut',
    img: '/feature/manual-aktifkan-lokasi/image-1.png',
    isOpen: true,
    device: false,
  },
  {
    id: 2,
    title: 'Pilih tab izin',
    desc: 'Pada tab izin akan menampikan status izin lokasi dan notifikasi',
    img: '/feature/manual-aktifkan-lokasi/image-2.png',
    isOpen: false,
    device: false,
  },
  {
    id: 3,
    title: 'Aktifkan Izin Lokasi',
    desc: 'Akan muncul status izin lokasi dan notifikasi, lalui aktifkan izin lokasi',
    img: '/feature/manual-aktifkan-lokasi/image-3.png',
    isOpen: false,
    device: false,
  },
  {
    id: 4,
    title: 'Izin Notifkasi Pada Penggunaan PC/Desktop ',
    desc: 'Klik ikon pada kiri atas , lalu aktifkan lokasi, jika tidak muncul klik site settings ',
    img: '/feature/manual-aktifkan-lokasi/image-4.png',
    isOpen: false,
    device: true,
  },
  {
    id: 5,
    title: 'Aktifkan Notifikasi Pada Site Settings',
    desc: 'Cari notifikasi lalu ubah permissionnya menjadi allow',
    img: '/feature/manual-aktifkan-lokasi/image-5.png',
    isOpen: false,
    device: true,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan manual izin lokasi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengaktifkan manual akses lokasi pada aplikasi barong'
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
      Panduan Manual Aktifkan Lokasi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengatur akses lokasi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
