<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Lupa kata sandi',
    desc: 'anda dapat menjalankan fitur lupa kata sandi untuk mengganti kata sandi anda dengan yang baru dengan menekan “lupa kata sandi” yang ada dalam kotak berwarna biru ',
    img: '/feature/lupa-kata-sandi/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Form Email',
    desc: 'Berisi form yang mengharuskan anda mengisi email yang telah anda daftarkan untuk membuat akun. Email yang anda massukkan nanti nya akan menerima pesan email dari kami untuk membuat kata sandi baru',
    img: '/feature/lupa-kata-sandi/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Masukkan Email',
    desc: 'Masukkan email anda dengan benar, pastikan  email yang anda masukkan merupakan email yang anda gunakan saat mendaftar akun dan tidak kosong. Setelah itu tekan button kirim dan akan muncul pesan “berhasil terkirim cek pesan email” apabila berhasil. ',
    img: '/feature/lupa-kata-sandi/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Pesan Email',
    desc: 'cek pesan email anda setelah itu buka pesan dan  tekan “klik link ini”.”',
    img: '/feature/lupa-kata-sandi/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Form Buat Kata Sandi Baru',
    desc: 'Tampilan disamping merupakan Form buat kata sandi baru yang mengharuskan anda mengisi kata sandi baru dan konfirmasi kata sandi baru.”',
    img: '/feature/lupa-kata-sandi/image-5.png',
    isOpen: false,
  },
  {
    id: 6,
    title: 'Lengkapi Form Buat Kata Sandi Baru',
    desc: 'Masukkan kata sandi baru anda dan masukkan konfirmasi kata sandi. pastikan kata sandi yang anda masukkan benar dan ingat kata sandi anda tersebut. Setelah itu anda dapat menekan button kirim. ”',
    img: '/feature/lupa-kata-sandi/image-6.png',
    isOpen: false,
  },
  {
    id: 7,
    title: 'Ubah Kata Sandi Berhasil',
    desc: 'Jika berhasil akan muncul pesan “berhasil ubah kata sandi” dan sekarang kata sandi baru anda sudah jadi sehingga bisa digunakan untuk melakukan login.”',
    img: '/feature/lupa-kata-sandi/image-7.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan lupa kata sandi - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam melakukan fitur lupa kata sandi pada aplikasi barong'
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
      Panduan Lupa Kata Sandi
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam melakukan fitur lupa kata sandi
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
