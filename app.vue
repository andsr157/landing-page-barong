<script setup lang="ts">

useHead({
  bodyAttrs: {
    'data-theme': 'morpheme',
  },
})
</script>

<template>
  <Html lang="en" />
  <Head>
    <Link rel="icon" type='image/png' href="/logo.png"  />
  </Head>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
