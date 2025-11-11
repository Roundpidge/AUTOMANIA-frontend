<script setup>
 import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
 <nav class="bg-[rgb(125,198,57)]">
 <RouterLink to="/">Exit</RouterLink>
 <RouterLink to="/starter">Start</RouterLink>
  <RouterLink to="/world">Map</RouterLink>
 </nav>
 <RouterView />
</template>
<style scoped></style>
