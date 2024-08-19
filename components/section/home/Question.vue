<!-- eslint-disable no-alert -->
<script setup lang="ts">
import { number, object, string } from 'yup'
import { useForm } from 'vee-validate'

const placement = ref<any>('top');
const isToastOpen = ref(false)

const schema = object({
  name: string().required('Nama Harus Diisi').label('Nama Lengkap').typeError('Harus Huruf'),
  email: string().required('Email Harus Diisi').email('Email Tidak Valid').label('Email').typeError('Harus Huruf'),
  telp: number().min(11, 'Telepon Minimal 11 Angka').required('Telepon Harus Diisi').label('Nomor Telepon').typeError('Harus Angka'),
  message: string().min(10, 'Kirimkan Pesan Minimal 10 Kata').required('Pesan Harus Diisi').label('Nama Lengkap').typeError('Harus Huruf'),
})


const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const isLoading = ref(false)
const toastMessage = ref<any>('Berhasil terkirim')
const toastColor = ref('primary')

const openToast = (timeout=3000 , message='berhasil terkirim', color='primary') => {
    toastMessage.value = message
    toastColor.value = color
    isToastOpen.value = true
    setTimeout(() => {
      isToastOpen.value = false
    }, timeout)
}

const onSubmit = handleSubmit(async(values) => {
  try {
    isLoading.value = true
    const payload = {
      email:values.email,
      name:values.name,
      phone:values.telp,
      message:values.message
    }
    const res = await $fetch('/api/email',{
      method:'POST',
      body:payload
    }) as any

    if(res && res.accepted.length){
      resetForm()
      openToast()
    }else{
      openToast(1000, 'Gagal Terkirim', 'error')
    }
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    openToast(1000, 'Ada yang salah coba kembali', 'error')
    console.log(error)
  }
})
</script>

<template>
  <div id="question">
    <VToast v-model="isToastOpen" :placement="placement" :color="toastColor" class="!z-[100] !mt-16">{{ toastMessage }} </VToast>
    <div  v-motion="SLIDE_TOP" class="w-full pt-16 sm:pt-20 px-6 sm:px-14 md:pt-24 lg:pt-32 text-xl md:text-2xl lg:text-3xl font-bold text-center text-brg-secondary-dark">
      <h2>Ada pertanyaan, saran, atau kritik?</h2>
      <p class="text-brg-dark-gray text-sm sm:text-base md:text-md font-normal mt-4">
        ada hal yang ingin anda sampaikan, silahkan kirim pesan kepada kami.
      </p>
    </div>
    <div  v-motion="SLIDE_BOTTOM" class="grid md:grid-cols-12 md:mx-14 lg:mx-24 xl:mx-36 rounded-[20px] overflow-hidden p-[3px]  bg-brg-primary mt-16">
      <div class="flex flex-col gap-y-2 px-10 md:px-5 lg:px-10 py-14 text-white items-start col-span-5 w-full ">
        <div class="mx-auto md:mx-0 md:w-full md:h-full p-6">
          <NuxtImg src="/home/images/Question1.png" class="w-full h-full object-contain" />
        </div>
        <div class="flex gap-x-4 sm:w-[50%] mx-auto md:mx-0">
          <div class="flex flex-col gap-y-3">
            <VIcon name="ri:mail-fill" size="sm" />
            <VIcon name="ri:phone-fill" size="sm" />
            <VIcon name="ic:round-maps-home-work" size="sm" />
          </div>
          <div class="flex flex-col gap-y-3 text-sm lg:text-base">
            <p>barong.surakarta@gmail.com</p>
            <p>+62 85865412191</p>
            <p>Jl. Letjen Sutoyo No.43, Cengklik, Nusukan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57135</p>
          </div>
        </div>
      </div>
      <form class="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 col-span-7 w-full bg-white rounded-[20px] p-8 sm:p-10 lg:p-16" @submit="onSubmit">
        <p class="text-lg font-semibold text-brg-secondary-dark ">
          Kami sangat mengapresiasi Kritik,Saran dan Pertanyaan anda.
        </p>
        <VInput placeholder="Nama Lengkap" name="name" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-4">
          <VInput placeholder="Email" name="email" class="!overflow-hidden"/>
          <VInput placeholder="Nomor Telepon" name="telp" validation-mode="aggressive" class="!overflow-hidden" />
        </div>
        <VTextarea placeholder="Pesan" name="message" />
        <div class="flex w-full justify-end">
          <VBtn :loading="isLoading" :disabled="isLoading" type="submit" no-ring size="md" class="!bg-brg-primary  !text-white hover:!bg-primary-600 !text-xs md:!text-base py-4 !px-6 !rounded-[20px] max-w-max">
            Kirim
          </VBtn>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.v-input{
    --v-input-border-color: #307FF5;
    --v-input-text-color: #384e84c4;
}
</style>
