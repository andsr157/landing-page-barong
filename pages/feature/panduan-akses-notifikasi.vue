<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: "Izinkan Setelah Login",
    desc: "Setelah Login Akan diminta akses notifikasi, Jika tidak muncul kemungkinan sudah diizinkan atau anda tolak izinnya",
    img: "/feature/akses-notifikasi/image-1.png",
    isOpen: true
  },
  {
    id: 2,
    title: "Melihat Notifikasi",
    desc: "Pada pojok kanan atas halaman home terdapat ikon notifikasi , klik akan diarahkan pada halaman notifikasi anda dapat melihat notifikasi transaksi, untuk menandai dibaca klik lihat atau klik tombol baca semua",
    img: "/feature/akses-notifikasi/image-2.png",
    isOpen: false
  },
  {
    id: 3,
    title: "Menghapus Notifikasi",
    desc: "Untuk membersihkan notifikasi anda bisa kilk hapus pada notifikasi tertentu, atau klik hapus semua , maka seluruh notifikasi akan terhapus",
    img: "/feature/akses-notifikasi/image-3.png",
    isOpen: false
  },
  {
    id: 4,
    title: "Jika tidak menerima notifikasi",
    desc: "Jika notifikasi transaksi tidak muncul kemungkinan izin tidak diberikan atau anda blokir, untuk mengaktifkannya anda bisa lihat panduan manual mengaktifkan notifikasi. Tapi ketika sudah diberi izin masih tidak muncul anda bisa coba dengan login ulang",
    img: "/feature/akses-notifikasi/image-4.png",
    isOpen: false
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan akses izin notifikasi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengatur izin akses notifikasi pada aplikasi barong'
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
      Panduan Akses Notifikasi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengatur akses notifikasi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>