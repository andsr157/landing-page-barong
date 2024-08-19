<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Masukan Nama Lengkap',
    desc: 'Masukan  nama lengkap anda , isikan nama dengan benar sesuai dengan nama anda',
    img: '/feature/registrasi/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Masukan Email Valid',
    desc: 'Gunakan email yang valid, email tidak dapat dirubah setelah akun dibuat, email digunakan untuk mereset kata sandi ketika anda lupa',
    img: '/feature/registrasi/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Masukan Nama Nomor Telepon',
    desc: 'Masukan nomor telepon anda , berikan nomor telepon yang masih aktif',
    img: '/feature/registrasi/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Buat Kata Sandi',
    desc: 'Terakhir Buat Kata Sandi dengan minimal 8 karakter, 1 huruf besar dan 1 angka',
    img: '/feature/registrasi/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Pendaftaran Berhasil',
    desc: 'Klik daftar dan akan muncul pesan ‘pendaftaran berhasil’ jika success membuat akun',
    img: '/feature/registrasi/image-5.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan Registrasi akun - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam registrasi atau membuat akun baru pada aplikasi barong'
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
      Panduan Registrasi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam membuat akun baru
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
