<script setup lang="ts">
interface Items {
  id: number
  title: string
  desc: string
  img: string
  isOpen: boolean
  device?: boolean
}
const props = defineProps<{
  Item: Items[]
}>()
const currentId = ref<number>(1)
const currentImg = ref<string>(props.Item[0].img)
const currentDevice = ref<boolean | undefined>(props?.Item[0]?.device)

function openDesc(id: number) {
  if (currentId.value !== id)
    props.Item[currentId.value - 1].isOpen = false
  props.Item[id - 1].isOpen = true
  currentId.value = id
  currentImg.value = props.Item[id - 1].img
  currentDevice.value = props.Item[id - 1].device
}
const isStickyActive = ref<boolean>(false)

function handleScroll() {
  const scrollPosition = window.scrollY
  isStickyActive.value = scrollPosition > 100 // Adjust the value based on when you want the class to be added
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row justify-between px-5 pb-10 lg:px-12 lg:pb-16 gap-5">
    <div class="w-full lg:w-1/2">
      <div v-for="item in props.Item" :key="item.id" v-motion-slide-right delay="500" :class="[item.isOpen ? 'bg-brg-primary w-full lg:max-w-[550px] h-auto py-5 px-5 sm:p-10 mt-4 transition-all duration-1000 ' : 'w-full lg:w-[550px] h-auto sm:px-10 mt-4 transition-all duration-300'] ">
        <div class="flex gap-5 items-center cursor-pointer" @click="openDesc(item.id)">
          <div class="flex justify-center shrink-0 items-center w-8 h-8 md:w-14 md:h-14 rounded-full" :class="[item.isOpen ? ' bg-white' : 'bg-brg-primary']">
            <h1 class="text-md md:text-2xl font-semibold md:font-bold  text-center" :class="[item.isOpen ? 'text-brg-primary' : 'text-white']">
              {{ item.id }}
            </h1>
          </div>
          <h1 class="text-md md:text-2xl font-semibold md:font-bold" :class="[item.isOpen ? ' text-white' : 'text-brg-primary-dark']">
            {{ item.title }}
          </h1>
        </div>
        <p :class="[item.isOpen ? 'text-sm md:text-xl text-white pl-[52px] md:pl-20 text-justify font-light' : 'hidden ']">
          {{ item.desc }}
        </p>
      </div>
    </div>
    <div v-motion-pop :class="[isStickyActive ? 'sticky top-[95px] md:top-[76px] transition-all duration-200 bg-brg-primary lg:bg-transparent py-7 lg:relative lg:top-0 lg:mx-auto' : 'transition-all duration-200 py-2 lg:relative lg:top-0 lg:mx-auto']">
      <div :class="[currentDevice ? 'relative w-[300px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[580px] lg:h-[488px] mx-auto transition-all duration-1000' : 'relative w-[200px] h-[350px] sm:-w-[250px] sm:-h-[400px] lg:w-[350px] lg:h-[689px] mx-auto transition-all duration-1000']">
        <NuxtImg
          :src="currentDevice ? '/assets/template-desktop.png' : '/assets/template-handphone.png'"
          :class="[currentDevice ? 'absolute w-[300px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[580px] lg:h-[488px] transition-all duration-1000' : 'absolute w-[200px] h-[350px] sm:-w-[250px] sm:-h-[400px] lg:w-[350px] lg:h-[620px] transition-all duration-1000']"
        />
        <NuxtImg :src="currentImg" :class="[currentDevice ? 'absolute  w-[270px] h-[150px] top-4 left-4 sm:w-[365px] sm:h-[200px] sm:top-4 sm:left-5 lg:w-[530px] lg:h-[300px] lg:top-7 lg:left-7' : 'absolute rounded-xl w-[160px] max-h-[300px] h-auto sm:-w-[220px] sm:max-h-[300px] lg:w-[250px] lg:max-h-[500px] object-cover top-5 left-5 sm:top-6 sm:left-5 lg:top-16 lg:left-12 transition-all duration-1000']" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticky-active {
  background-color: var(--bg-brg-primary);
}
</style>
