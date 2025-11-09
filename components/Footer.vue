<template>
  <footer class="bg-[#3b5998] text-white py-8 px-6 md:px-16 font-sans mt-10">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      
      <!-- Left: Name + tagline -->
      <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold tracking-tight">Collin Brennan</h2>
        <p class="text-sm text-[#dfe3ee]">Building technology that adapts to people- not the other way around.</p>
      </div>

      <!-- Center: Links -->
      <div class="flex space-x-6">
        <div class="flex flex-col items-center">
          <div class="flex flex-row space-x-6">
            <a
              href="https://github.com/Collinb04"
              target="_blank"
              class="hover:text-[#dfe3ee] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/colbren04"
              target="_blank"
              class="hover:text-[#dfe3ee] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/Collin_Brennan_Resume.pdf"
              download
              class="hover:text-[#dfe3ee] transition-colors"
            >
              Resume
            </a>
          </div>
          <!-- Right: Copyright -->
          <div class="text-center md:text-right text-sm text-[#dfe3ee]">
            © {{ new Date().getFullYear() }} Collin Brennan. All rights reserved.
          </div>
        </div>
      </div>
    </div>

    <!-- Divider Line -->
    <div class="h-[1px] bg-[#2d4373] mt-6 mb-4"></div>

    <!-- Bottom Center Small Text -->
    <div class="text-center text-xs text-[#dfe3ee] opacity-80">
      Designed & coded in Vue & Nuxt — inspired by early Facebook simplicity.
    </div>
  </footer>
</template>
