<template>
  <header>
    <nav class="flex gap-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/list">List</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
