<template>
  <div>
    <!-- Main Navbar -->
    <nav class="flex items-center justify-between bg-[#3b5998] px-6 py-3 shadow-md">
      <!-- Left side (logo / brand) -->
      <div class="flex items-center space-x-2">
        <h1 class="text-white text-2xl font-bold font-sans tracking-tight ml-20">
          collinbook
        </h1>
      </div>

      <!-- Mobile menu button -->
      <button class="text-white focus:outline-none md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <!-- Secondary Light Blue Bar -->
    <div class="bg-[#e7f3ff] h-8 w-full shadow-inner flex items-center px-6">
      <p class="text-[#3b5998] font-medium ml-20">
        Welcome to collinbook — my personal profile feed!
      </p>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'DevNav' })
</script>

