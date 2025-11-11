<script setup>
import bg from '@/assets/placeholderBackround.png'
import {useCarStore } from '@/stores/data.js'

const store=useCarStore();

</script>
<template>
  <div class="w-screen h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})`}" >
    <span>Naši auti: </span>
    <span class="3xl">Trgovina</span>
       <span class="3xl">Garaža</span>
  </div>
</template>
<style scoped></style>
