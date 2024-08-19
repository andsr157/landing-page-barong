<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk mengubah alamat anda dapat menekan “alamat”',
    img: '/feature/ubah-alamat/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Daftar alamat',
    desc: 'pada tampilan Daftar Alamat, jika anda telah menambah kan alamat akan muncul card-card alamat , anda dapat menekan salah satu alamat yang ingin anda ubah',
    img: '/feature/ubah-alamat/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Form Ubah Alamat',
    desc: 'Akan muncul form edit alamat yang sudah terisi data alamat sebelumnya, anda dapat mengubah semua field alamat atau mengubah salah satu nya saja, asalkan field tidak ada yang kosong',
    img: '/feature/ubah-alamat/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Ubah  alamat',
    desc: 'Disini saya akan mengubah label alamat saya yang sebelumnya adalah “Kos” menjadi “Rumah” lalu gulir atau scrol ke bawah dan klik button simpan',
    img: '/feature/ubah-alamat/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Berhasil ubah Alamat',
    desc: 'alamat anda berhasil diubah, anda dapat mengecek pada daftar alamat.',
    img: '/feature/ubah-alamat/image-5.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan mengubah data alamat - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengedit atau mengubah data alamat pada aplikasi barong'
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
      Panduan Ubah Alamat
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengubah alamat
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
