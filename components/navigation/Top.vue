<script setup lang="ts">
// Props
const props = defineProps({
  isAsideOpen: Boolean,
})

// Emits
const emits = defineEmits(['handleOpenMenu'])

const isAsideOpen = ref(props.isAsideOpen)
watch(() => props.isAsideOpen, (newIsAsideOpen) => {
  isAsideOpen.value = newIsAsideOpen
})

const scrollPosition = ref(0)
function updateScroll() {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <div class="fixed z-20 top-0 w-full">
    <div
      class="px-5 lg:px-14 py-4 lg:py-6 flex justify-between bg-white shadow-s "
    >
      <div class="w-full flex gap-8 justify-between  ">
        <NuxtLink to="/">
          <div class="flex gap-4 lg:gap-6 items-center">
          <NuxtImg
            src="/logo.svg"
            loading="lazy"
            sizes="64px"
            alt="Logo Gits"
            class="md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
          />
          <p class="text-xl lg:text-2xl xl:text-3xl font-semibold text-brg-primary-dark">
            Barong
          </p>
        </div>
        </NuxtLink>
     
        <div class="w-full flex gap-12 justify-end items-center ">
          <ul class="hidden md:flex justify-between  gap-8 items-center text-md lg:text-xl text-brg-primary-dark ">
            <NuxtLink to="/">
              <li class="hover:text-brg-primary">
                Beranda
              </li>
            </NuxtLink>
            <NuxtLink to="/about">
              <li class="hover:text-brg-primary">
                Tentang Kami
              </li>
            </NuxtLink>
            <NuxtLink to="/feature">
              <li class="hover:text-brg-primary">
                Fitur
              </li>
            </NuxtLink>
          </ul>

          <div class="max-w-max hidden md:flex gap-3">
            <a href="https://barong-psi.vercel.app" target="_blank">
              <VBtn
                no-ring
                class="relative !px-7 !py-3 !text-md !text-white !rounded-3xl !bg-brg-primary "
              >
                Download
              </VBtn>
            </a>
          </div>
          <div class="block md:hidden">
            <VBtn prefix-icon="ri:menu-line" @click="emits('handleOpenMenu')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul .router-link-active.router-link-exact-active {
  color: #307FF5 !important;
}
</style>
