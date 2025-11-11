<script setup> import { RouterLink, RouterView } from 'vue-router'
import { usePageStore  } from "@/stores/data.js"
 const kozmetikaStranice = usePageStore();
</script>

<template>
  <div>
  <h1 class="text-9xl">AUTOMANIA</h1>
  <img :src="kozmetikaStranice.slike[0].prvi"></img>
   <RouterLink to="/about">Start</RouterLink>
  <RouterView />
  </div>
</template>
<style scoped>

</style>
