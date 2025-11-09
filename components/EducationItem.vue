<template>
  <div class="flex flex-row items-start">
    <div class="h-14 w-14 md:h-16 md:w-16 bg-blue-500 mr-3 rounded-lg"></div>
    <div class="flex flex-col space-y-0.5">
      <div class="text-sm md:text-base text-[#0a2255] font-semibold">
        {{ school }}
      </div>
      <div class="text-sm md:text-base text-[#0a2255]">{{ degree }}</div>
      <div
        class="flex flex-row flex-wrap items-center space-x-2 text-gray-400 text-sm"
      >
        <span>{{ dates }}</span>
        <img class="w-2 h-4" src="/locationMarker.png" alt="Location" />
        <span>{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  school: String,
  degree: String,
  dates: String,
  location: String,
});
</script>
