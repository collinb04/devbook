<template>
  <nav class="flex items-center justify-between bg-[#3b5998] px-6 py-3 shadow-md">
    <!-- Left side (logo / brand) -->
    <div class="flex items-center space-x-2">
      <h1 class="text-white text-2xl font-bold font-sans tracking-tight">devbook</h1>
    </div>

    <!-- Mobile menu button -->
    <button class=" text-white focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
</template>

<script setup>
defineOptions({ name: 'DevNav' })
</script>
