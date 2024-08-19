<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk mengubah kata sandi dapat klik “Ubah Kata Sandi”',
    img: '/feature/ubah-password/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Form Ubah Kata Sandi',
    desc: 'Setelah klik ubah kata sandi, maka akan masuk halaman ubah kata sandi. User diminta memasukan kata sandi saat ini (kata sandi lama) dan kata sandi yang baru',
    img: '/feature/ubah-password/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Masukkan Kata Sandi Lama & Baru',
    desc: 'Masukan kata sandi lama, lalu masukan kata sandi baru dengan catatan kata sandi harus 8 karakter dan terdapat huruf besar.',
    img: '/feature/ubah-password/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Jika tidak Lupa Kata Sandi',
    desc: 'Namun jika user lupa kata sandi, dapat klik “lupa kata sandi” yang terdapat pada bagian bawah setelah form. Note : untuk penjelasan lupa kata sandi dapat dilihat pada panduan fitur autentifikasi, bagian lupa password.',
    img: '/feature/ubah-password/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Isi Semua Form Ubah Kata Sandi',
    desc: 'Setelah memasukan kata sandi baru dan mengisikan konfirmasi kata sandi dengan benar. Selajutnya klik tombol “Ubah Kata Sandi”',
    img: '/feature/ubah-password/image-5.png',
    isOpen: false,
  },
  {
    id: 6,
    title: 'Klik Button “Ubah Kata Sandi”',
    desc: 'Setelah klik “Ubah Kata Sandi”, dan berhasil maka akan kembali ke halaman profil',
    img: '/feature/ubah-password/image-6.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan mengubah kata sandi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengubah kata sandi pada aplikasi barong'
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
      Panduan Ubah Kata Sandi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengubah kata sandi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
