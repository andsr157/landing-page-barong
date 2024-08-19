<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: "Izinkan Setelah Login",
    desc: "Setelah Login Akan diminta akses lokasi, Jika tidak muncul kemungkinan sudah diizinkan atau anda tolak izinnya, jika diblokir manual aktifkan, lihat panduan manual aktifkan lokasi",
    img: "/feature/akses-lokasi/image-1.png",
    isOpen: true
  },
  {
    id: 2,
    title: "Meminta Akses Lokasi Pada Form Alamat",
    desc: "Jika notifikasi belum anda izinkan maka pada saat menambah atau mengedit alamat, anda akan dimintai izin. Jika anda blokir izin notifikasi maka anda harus mengaktifkannya secara manual, bisa dilihat pada panduan “manual aktifkan lokasi”",
    img: "/feature/akses-lokasi/image-2.png",
    isOpen: false
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan akses izin lokasi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengatur izin akses lokasi pada aplikasi barong'
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
      Panduan Akses Lokasi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengatur akses lokasi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>