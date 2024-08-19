<script setup lang="ts">


const data = reactive([
  {
    id: 1,
    title: "Masukan Foto Rongsok",
    desc: "Klik pada kolom inputan yang bertuliskan “Masukan foto disini” lalu pilih foto rongsok anda",
    img: "/feature/jual-rongsok/image-1.png",
    isOpen: true
  },
  {
    id: 2,
    title: "Tambah Rongsok",
    desc: "Klik button tambah sampah, maka akan muncul form, pilih kategori dan sub kategori lalu inputkan perkiraan beratnya, lalu klik tombol simpan",
    img: "/feature/jual-rongsok/image-2.png",
    isOpen: false
  },
  {
    id: 3,
    title: "Edit Data Rongsok Yang Telah Ditambahkan",
    desc: "Anda dapat mengubah berat atau menghapus data rongsok, jika ingin menambahkan rongsok yang lain maka ulangi langkah kedua tadi",
    img: "/feature/jual-rongsok/image-3.png",
    isOpen: false
  },
  {
    id: 4,
    title: "Ubah Alamat",
    desc: "Jika ingin mengubah akamat klik ubah alamat maka menampilkan halaman alamat, klik alamat yang diinginkan lalu aktifkan button atur sebagai alamat utama, anda bisa melihatnya pada panduan 'atur alamat utama', atau anda dapat menambahkan alamat baru ikuti langkah pada panduan 'buat alamat baru'",
    img: "/feature/jual-rongsok/image-4.png",
    isOpen: false
  },
  {
    id: 5,
    title: "Tambahkan Catatan",
    desc: "Tambahkan catatan untuk pengepul , isikan jika ada informasi yang perlu pengepul tahu, ini opsional., setelah semua selesai klik Selanjutnya",
    img: "/feature/jual-rongsok/image-5.png",
    isOpen: false
  },
  {
    id: 6,
    title: "Konfirmasi Transaksi",
    desc: "Pada halaman konfirmasi menampilkan data yang telah diinputkan, dan juga menampilkan rincian estimasi pendapatan, jika sudah yakin data benar klik konfirmasi",
    img: "/feature/jual-rongsok/image-6.png",
    isOpen: false
  },
  {
    id: 7,
    title: "Tunggu Diambil Pengepul",
    desc: "Tambahkan catatan untuk pengepul , isikan jika ada informasi yang perlu pengepul tahu, ini opsional., setelah semua selesai klik Selanjutnya",
    img: "/feature/jual-rongsok/image-7.png",
    isOpen: false
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan transaksi penjualan - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = '  Langkah - langkah dalam membuat transaksi penjulan rongsok pada aplikasi barong'
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
      Panduan Jual Rongsok
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam membuat transaksi penjulan rongsok
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>