<template>
  <nav class="flex flex-col space-y-3 mt-6">
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="text-[#0a2255] text-base font-medium transition hover:text-[#6c86bd] hover:scale-110"
      :class="{ 'font-bold text-[#6c86bd]': route.path === link.path }"
    >
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import { useRoute } from '#app'  // <-- Nuxt 3 composable

const route = useRoute()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
//   { name: 'Projects', path: '/projects' },
//   { name: 'Contact', path: '/contact' }
]
</script>
