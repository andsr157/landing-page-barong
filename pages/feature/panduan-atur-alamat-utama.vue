<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk mengatur salah satu alamat anda menjadi alamat utama yang anda gunakan, anda  dapat menekan “alamat”',
    img: '/feature/atur-alamat-utama/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Daftar alamat',
    desc: 'pada tampilan Daftar Alamat, jika anda telah menambah kan alamat maka akan muncul card-card alamat,selanjutnya anda dapat menekan salah satu alamat, yang ingin anda atur sebagai alamat utama yang akan digunakan',
    img: '/feature/atur-alamat-utama/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Tekan Toggle Atur Alamat',
    desc: 'pada kotak yang berwarna biru jika anda ingin menjadikan alamat ini sebagai alamat utama yang digunakan maka anda dapat menekannya. ',
    img: '/feature/atur-alamat-utama/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Berhasil Mengatur Alamat Utama',
    desc: 'setelah anda menekan ikon toggle tersebut akan muncul pesan “berhasil dijadikan alamat utama” yang berarti anda berhasil menjadikan alamat ini menjadi alamat utama',
    img: '/feature/atur-alamat-utama/image-4.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan mengatur alamat utama - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam mengatur alamat menjadi alamat utama yang digunakan pada aplikasi barong'
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
      Panduan Atur Alamat Utama
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengatur alamat menjadi alamat utama yang digunakan
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
