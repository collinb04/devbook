<template>
    <NavBar />
  <div
    class="flex flex-col md:flex-row items-start md:items-start md:ml-20 md:mt-20 mt-10 space-y-6 md:space-y-0 md:space-x-8 px-4"
  >
    <!-- Left Column: Profile + Navbar -->
    <div class="flex flex-col items-center md:items-start">
      <!-- Profile Image -->
      <div
        class="flex-shrink-0 w-40 h-40 md:w-64 md:h-64 border-4 border-[#6c86bd] overflow-hidden"
      >
        <img
          src="/me.jpeg"
          alt="Collin Brennan"
          class="w-full h-full object-cover scale-110"
        />
      </div>

      <!-- Vertical NavBar -->
      <NavBarColumn />
    </div>

    <!-- Right Column: Page Content -->
    <main class="flex flex-col space-y-6 w-full max-w-3xl">
      <slot />
    </main>
  </div>
</template>

<script setup>
import NavBar from '~/components/NavBar.vue'
</script>

<style scoped>
img {
  display: block;
}
</style>
