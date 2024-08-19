<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk menambahkan alamat anda dapat menekan “alamat”',
    img: '/feature/buat-alamat/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Daftar alamat',
    desc: 'pada tampilan Daftar Alamat, jika anda telah menambah kan alamat akan muncul card-card alamat , anda dapat menekan button tambah alamat untuk menambahkan alamat anda lagi.',
    img: '/feature/buat-alamat/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Form Tambah Alamat',
    desc: 'Lengkapi form tambah alamat tersebut, anda dapat  mengisi alamat lengkap dengan menekan input pilih lokasi anda lalu akan muncul maps dan anda dapat memilih lokasi anda, atau anda dapat memasukkan alamat lengkap secara manual. selain itu anda harus mengisi juga label alamat, patokan, nama pemilik, nomor telepon, dan anda juga bisa mengatur alamat ini akan menjadi alamat utama atau tidak (bersifat opsional).',
    img: '/feature/buat-alamat/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Pilih Lokasi Anda',
    desc: 'tekan ikon yang dilingkari berwarna biru maka otomatis akan membaca posisi anda saat ini, apabila anda ingin mengubah, anda dapat menggeser pin sesuai lokasi yang anda inginkan, setelah itu anda dapat menekan simpan dan otomatis field alamat lengkap akan terisi.',
    img: '/feature/buat-alamat/image-4.png',
    isOpen: false,
  },
  {
    id: 5,
    title: 'Masukkan Alamat Lengkap',
    desc: 'Selain memilih lokasi anda dapat Memasukkan alamat lengkap anda secara manual dan pastikan alamat yang anda masukkan benar dan tidak kosong.',
    img: '/feature/buat-alamat/image-5.png',
    isOpen: false,
  },
  {
    id: 6,
    title: 'Masukkan Label Alamat',
    desc: 'Masukkan label alamat anda, seperti contoh: Rumah, Kos, dll, pastikan anda memasukkan label alamat dengan benar dan tidak kosong.',
    img: '/feature/buat-alamat/image-6.png',
    isOpen: false,
  },
  {
    id: 7,
    title: 'Masukkan Patokan',
    desc: 'Masukkan patokan anda, seperti contoh: depan masjid, samping alfamart, depan pos kamling, dll, pastikan anda memasukkan patokan alamat anda dengan benar dan tidak kosong.',
    img: '/feature/buat-alamat/image-7.png',
    isOpen: false,
  },
  {
    id: 8,
    title: 'Masukkan Nama Pemilik',
    desc: 'Masukkan nama pemilik atau nama anda, anda dapat memasukkan nama pemilik sesuai nama asli anda atau nama familiar anda, dan pastikan anda memasukkan nama pemilik dengan benar dan tidak kosong.',
    img: '/feature/buat-alamat/image-8.png',
    isOpen: false,
  },
  {
    id: 9,
    title: 'Masukkan No Telepon',
    desc: 'Masukkan no telepon anda,  pastikan anda memasukkan no telepon dengan benar dan tidak kosong. tampilan yang ada dalam kotak berwarna biru merupakan toggle untuk anda dapat mengatur alamat tersebut menjadi alamat utama atau tidak (bersifat opsional). setelah form terisi semua anda dapat menekan button simpan',
    img: '/feature/buat-alamat/image-9.png',
    isOpen: false,
  },
  {
    id: 10,
    title: 'Berhasil Menambahkan Alamat',
    desc: 'anda dapat mengecek alamat yang anda tambahkan sebelumnya pada daftar alamat, seperti tampilan yang ada dalam kotak berwarna biru menunjukkan alamat berhasil ditambahkan.',
    img: '/feature/buat-alamat/image-10.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan membuat alamat baru - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = 'Langkah - langkah dalam menambah atau membuat alamat baru pada aplikasi barong'
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
      Panduan Tambah Alamat
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam menambah alamat
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
