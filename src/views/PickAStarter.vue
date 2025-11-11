<script setup>
import bg from '@/assets/placeholderBackround.png'
import {useCarStore } from '@/stores/data.js'

const store=useCarStore();
 function goToWorld(){
  router.push()
 }
</script>
<template>
 <div  class="w-screen h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bg})` }">

  <div class="flex flex-col items-center justify-center h-full">

    <h1 class="text-white text-6xl font-bold text-center mb-10">Pick your starter</h1>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  
      <div v-for="c in store.car" :key="c.id" class="bg-white/90 rounded-xl p-4 w-64 shadow">
        <p class="text-2xl font-semibold text-center text-amber-600">{{ c.name }}</p>
        <p class="text-sm text-center" >Size: {{ c.size }} m</p>
        <p class="text-sm text-center" >Health: {{ c.health }}</p>
        <p class="text-sm text-center" >Power: {{ c.power }}</p>
        <p class="text-sm text-center" >Weight: {{ c.weight }}</p>
        <button class="bg-amber-600 rounded-sm hover:bg-green-600">Pick me!</button>
      </div>

    </div>

    </div>

  </div>
</template>
<style scoped></style>