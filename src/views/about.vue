<script setup>
import mainCar from '@/assets/mainCarsPlaceholder.png'
import bg from '@/assets/placeholderBackround.png'
</script>
<template>
 <div  class="w-screen h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">
  <div class="flex items-center justify-center h-full bg-black/40">
    <img :src="mainCar" class="h-40"></img>
    <h1 class="text-white text-4xl font-bold">Pick your starter</h1>
  </div>
</div>
</template>
<style scoped></style>