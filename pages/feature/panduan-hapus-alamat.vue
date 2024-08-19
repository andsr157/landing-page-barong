<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk menghapus salah satu alamat yang ingin anda hapus pada daftar alamat, pertama anda  dapat menekan “alamat”',
    img: '/feature/hapus-alamat/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Daftar alamat',
    desc: 'pada tampilan Daftar Alamat, jika anda telah menambahkan alamat maka akan muncul card-card alamat, selanjutnya anda dapat menekan salah satu alamat yang ingin anda hapus',
    img: '/feature/hapus-alamat/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Tekan Button Hapus Alamat',
    desc: 'pada  tampilan formulir edit alamat anda dapat menggulir atau scroll ke bawah, kemudian jika anda ingin menghapus alamat, anda dapat menekan button “hapus alamat”',
    img: '/feature/hapus-alamat/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Konfirmasi Hapus Alamat',
    desc: 'akan muncul pop up pesan konfirmasi untuk memastikan alamat tersebut benar” ingin anda hapus, jika anda menekan “ya” maka alamat akan dihapus, apabila “tidak” maka alamat akan dibatalkan untuk dihapus.',
    img: '/feature/hapus-alamat/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Berhasil Menghapus Alamat',
    desc: 'anda dapat melihat pada daftar alamat, bahwa alamat yang tadi anda hapus sekarang sudah tidak ada, maka anda telah berhasil menghapus alamat.',
    img: '/feature/hapus-alamat/image-5.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan menghapus alamat - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam menghapus alamat pada daftar alamat pada aplikasi barong'
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
      Panduan Menghapus Alamat
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam menghapus alamat pada daftar alamat
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
