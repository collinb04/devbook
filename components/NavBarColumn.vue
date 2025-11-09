<!-- components/NavBarColumn.vue -->
<template>
  <div class="flex flex-col mt-3 w-48">
    <!-- Page Links -->
    <nav class="flex flex-col">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="px-4 py-2 text-[#0a2255] text-base font-semibold transition hover:text-[#6c86bd]"
        :class="route.path === link.path ? 'bg-[#e7f3ff] font-bold' : 'bg-white'"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>

    <!-- Daily Quote Box -->
    <div class="bg-[#e7f3ff] text-[#0a2255] font-medium px-2 py-4 w-full mt-2">
      <div class="text-[#0a2255] font-bold mb-1">
        Daily Quote
      </div>
      "Your daily quote goes here — stay inspired!"
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#app'

const route = useRoute()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' }
]
</script>
