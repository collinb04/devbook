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
        :class="route.path === link.path ? 'bg-[#e7f3ff] rounded-lg font-bold' : 'bg-white'"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>

  </div>
</template>

<script setup>
import { useRoute } from '#app'

const route = useRoute()

const links = [
  { name: 'Home', path: '/' },
  { name: 'Education & Work', path: '/education' },
  { name: 'Projects & Skills', path: '/projects' },
]
</script>
