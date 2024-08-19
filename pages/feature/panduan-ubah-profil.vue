<script setup lang="ts">
const data = reactive([
  {
    id: 1,
    title: 'Buka Halaman Profile',
    desc: 'Pada halaman profile terdapat tiga fitur yaitu : ubah profile, alamat, ubah kata sandi, dan tombol logout. Untuk mengedit profile dapat klik “ubah profile”',
    img: '/feature/ubah-profile/image-1.png',
    isOpen: true,
  },
  {
    id: 2,
    title: 'Klik Ubah Profile',
    desc: 'Setelah klik ubah profile, maka akan masuk pada halaman ubah profil. Dan user dapat mengubah nama lengkap dan nomor telepon. note : user tidak dapat merubah alamat email.',
    img: '/feature/ubah-profile/image-2.png',
    isOpen: false,
  },
  {
    id: 3,
    title: 'Form Ubah Profile',
    desc: 'Masukkan nama lengkap yang baru, pastikan nama lengkap yang anda masukkan benar dan masukan nomor telepon yang sesuai dan aktif. Selanjutnya klik simpan',
    img: '/feature/ubah-profile/image-3.png',
    isOpen: false,
  },
  {
    id: 4,
    title: 'Berhasil Ubah Profile',
    desc: 'setelah anda menekan tombol simpan maka akan muncul pesan "Berhasil ubah profil" maka berarti anda berhasil melakukan ubah profil',
    img: '/feature/ubah-profile/image-4.png',
    isOpen: false,
  },
])

const runtimeConfig = useRuntimeConfig()
const appDomain = runtimeConfig.public.appUrl
const appName = 'Panduan mengubah profil akun - Barongsolo | Temukan nilai disetiap rongsok'
const appDescription = ' Langkah - langkah dalam mengubah data profil akun pada aplikasi barong'
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
      Panduan Ubah Profil
    </h1>
    <h1 class="text-sm sm:text-xl md:text-2xl text-brg-primary-dark">
      Langkah - langkah dalam mengubah profil
    </h1>
  </div>
  <CardDetailFitur :Item="data" />
</template>
