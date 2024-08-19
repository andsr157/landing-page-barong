<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: "Pilih Transaksi Yang Dibatalkan",
    desc: "Pergi ke halaman riwayat transaksi pilih  “dibatalkan” , lalu pilih transaksi yang diinginkan",
    img: "/feature/buat-transaksi-lagi/image-1.png",
    isOpen: true
  },
  {
    id: 2,
    title: "Klik Buat Transaksi Lagi",
    desc: "Setelah memilih transaksi akan ditampilkan halaman detail , klik button Buat Transaksi Lagi pada bagian paling bawah",
    img: "/feature/buat-transaksi-lagi/image-2.png",
    isOpen: false
  },
  {
    id: 3,
    title: "Edit Data",
    desc: "Setalh kilk button buat transaksi lagi, akan dibuatkan form dengan data dari transaksi tadi, anda wajib memasukan data foto lagi , untuk data lainnya anda dapat menambhkan  atau mengeditnya, jika tidak ada yang perlu ditambahkan klik selanjutnya",
    img: "/feature/buat-transaksi-lagi/image-3.png",
    isOpen: false
  },
  {
    id: 4,
    title: "Konfirmasi Transaksi",
    desc: "Konfirmasi data jika sudah klik konfirmasi , dan tunggu pengepul mengambil transaksi anda",
    img: "/feature/buat-transaksi-lagi/image-4.png",
    isOpen: false
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan membuat transaksi lagi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam membuat transaksi lagi dari data transaksi yang dibatalkan pada aplikasi barong'
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
      Panduan Buat Transaksi Lagi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam membuat transaksi lagi dari data transaksi yang dibatalkan
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>