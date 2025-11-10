<template>
  <div>
    <!-- Main Navbar -->
    <nav class="flex items-center justify-between bg-[#3b5998] px-6 py-3 shadow-md">
      <!-- Left side (logo / brand) -->
      <button
        class="text-white text-2xl font-bold font-sans tracking-tight ml-10 hover:scale-105 transition"
        @click="scrollToTop"
      >
        collinbook
      </button>

      <!-- Mobile menu button -->
      <button 
        class="text-white focus:outline-none md:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
        </svg>
      </button>
    </nav>

    <!-- Secondary Light Blue Bar -->
    <div class="bg-[#e7f3ff] h-8 w-full shadow-inner flex items-center px-6">
      <p class="text-[#3b5998] font-medium ml-20">
        Welcome to collinbook — my personal profile feed!
      </p>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div 
      v-if="mobileMenuOpen"
      class="md:hidden bg-white shadow-lg border-b border-gray-200"
    >
      <nav class="flex flex-col p-4 space-y-2">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="px-4 py-3 text-[#0a2255] text-base font-semibold transition hover:bg-[#e7f3ff] rounded-lg"
          :class="route.path === link.path ? 'bg-[#e7f3ff] font-bold' : ''"
          @click="mobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'DevNav' })

const route = useRoute()
const mobileMenuOpen = ref(false)

const links = [
  { name: 'Home', path: '/' },
  { name: 'Education & Work', path: '/education' },
  { name: 'Projects & Skills', path: '/projects' },
]

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>