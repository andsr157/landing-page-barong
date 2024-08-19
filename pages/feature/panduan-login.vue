<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Form Login',
    desc: 'Lengkapi form Login tersebut, sebelum login anda diharuskan untuk mengisi atau memasukkan email dan password.',
    img: '/feature/login/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Masukan Email',
    desc: 'Masukkan Email yang telah anda daftar kan sebelum nya pada halaman register, pastikan penulisan email valid',
    img: '/feature/login/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Masukan Password',
    desc: 'Masukkan password yang telah anda buat pada saat anda melakukan registrasi, pastikan password yang anda masukkan benar,dan jika anda ragu anda dapat menekan ikon mata untuk melihat password yang anda masukkan.',
    img: '/feature/login/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Login Berhasil',
    desc: 'tekan tombol masuk, jika email dan password yang anda masukkan benar maka akan muncul pesan “Login berhasil”',
    img: '/feature/login/image-4.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan login atau masuk - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam melakukan login atau masuk ke dalam aplikasi pada aplikasi barong'
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
      Panduan Login
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam melakukan login atau masuk ke dalam aplikasi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
