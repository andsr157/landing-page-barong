<script setup lang="ts">
const isAsideOpen = ref(false)
function handleOpenMenu() {
  isAsideOpen.value = !isAsideOpen.value
}

const isAsideOpenProp = computed(() => isAsideOpen.value)

watchEffect(() => {
  if (!isTablet.value && isAsideOpen.value)
    isAsideOpen.value = isTablet.value
})
</script>

<template>
  <VAppShell fluid>
    <template #header>
      <NavigationTop :is-aside-open="isAsideOpenProp" @handleOpenMenu="handleOpenMenu" v-motion="SLIDE_BOTTOM" />
    </template>

    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        fixed
        :class="[!isMobile ? '[--nav-drawer-width:308px]'
          : '[--nav-drawer-width:75%]', { 'absolute z-[99]': isMobile }]"
        style="height: 100%;"
        overlay
        shadow
      >
        <NavigationSide @handleOpenMenu="handleOpenMenu" />
      </VNavDrawer>
    </template>
    <div class="pt-[76px]">
      <slot />
    </div>
    <template #footer>
      <Footer />
    </template>
  </VAppShell>
</template>

<style>
.v-app-shell-main {
  display: block;
}

.v-app-shell-main .v-app-shell-container {
  max-width: 100% !important;
}
</style>
