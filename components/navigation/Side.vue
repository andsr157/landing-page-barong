<script setup lang="ts">
// Emits
const emits = defineEmits(['handleOpenMenu'])
</script>

<template>
  <VContainer class="p-6">
    <VList>
      <VListItemHeader>Menu</VListItemHeader>

      <VListItem prepend-icon="ri:home-2-line" to="/" @click="emits('handleOpenMenu')">
        Home
      </VListItem>
      <VListItem prepend-icon="solar:align-vertical-center-line-duotone" to="/feature" @click="emits('handleOpenMenu')">
        Fitur
      </VListItem>
      <VListItem prepend-icon="mdi:about-circle-outline" to="/about" @click="emits('handleOpenMenu')">
        Tentang Kami
      </VListItem>
    </VList>
    <a href="https://barong-psi.vercel.app" target="_blank">
      <VButton class="relative left-1/2 -translate-x-1/2 mt-12 !text-white !rounded-lg !bg-brg-primary">
        Download
      </VButton>
    </a>
  </vcontainer>
</template>

<style lang="scss" scoped>
.v-list {
  --v-list-gap: 10px;
}
.v-list .router-link-active.router-link-exact-active {
  --v-list-item-bg-color: #307FF5;
  --v-list-item-color:white;
}
</style>
