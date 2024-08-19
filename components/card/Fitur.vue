<script setup lang="ts">
interface Items {
  icon: string
  title: string
  desc: string
  to: string
}
defineProps<{
  title: string
  desc: string
  items: Items[]
}>()
const isOpen = ref<boolean>(true)
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 sm:gap-16">
    <div class="flex flex-col gap-3 w-full md:max-w-[300px] lg:min-w-[350px]">
      <div v-motion="SLIDE_BOTTOM" class="flex justify-between items-center">
        <h1 class="font-semibold text-lg sm:text-2xl text-brg-primary-dark">
          {{ title }}
        </h1>
        <VIcon
          v-if="isOpen === true"
          name="ic-baseline-keyboard-arrow-down"
          no-ring
          size="xl"
          class="hover:transform hover:scale-150 hover:duration-500"
          @click="isOpen = false"
        />
        <VIcon
          v-else
          name="ic-outline-keyboard-arrow-up"
          no-ring
          size="xl"
          class="hover:transform hover:scale-150 hover:duration-500"
          @click="isOpen = true"
        />
      </div>
      <Transition name="desc">
        <p v-if="isOpen" v-motion="SLIDE_RIGHT" class="text-justify text-sm sm:text-lg text-brg-primary-dark">
          {{ desc }}
        </p>
      </Transition>
    </div>
    <Transition name="desc">
      <div v-if="isOpen" v-motion-slide-visible-once-bottom :delay="500" class="grid grid-flow-row grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-x-10 sm:gap-y-10">
        <CardSubFitur
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :desc="item.desc"
          :to="item.to"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.desc-enter-active,
.desc-leave-active {
  transition:  opacity 0.2s, transform 0.2s;
}

.desc-enter-from,
.desc-leave-to {
  opacity: 0;
  transform: translateY(-25px);
}
</style>
