<template>
  <div ref="scrollContainer" class="h-screen overflow-y-auto scrollbar-hide">
    <!-- Top Navbar (Sticky) -->
    <div class="sticky top-0 z-50">
      <!-- Main Navbar -->
      <nav class="flex items-center justify-between bg-[#3b5998] px-6 py-3 shadow-md">
        <!-- Left side (logo / brand) -->
        <div class="flex items-center space-x-2">
          <button 
            class="text-white text-2xl font-bold font-sans tracking-tight ml-10 hover:scale-105 transition"
            @click.prevent="scrollToTop"
          >
            collinbook
          </button>
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
        <p class="text-[#3b5998] font-medium ml-10">
          Welcome to collinbook — my personal profile feed!
        </p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex flex-col md:flex-row items-start md:ml-10 mt-10 md:space-x-8 px-4">
      <!-- Left Sidebar: Sticky -->
      <div class="flex flex-col items-center md:items-start md:sticky md:top-[104px] w-full md:w-auto">
        <div class="flex-shrink-0 w-48 h-40 md:w-72 md:h-64 overflow-hidden rounded-lg border-8 border-[#3b5998]">
          <img
            src="/me.jpeg"
            alt="Collin Brennan"
            class="w-full h-full object-cover scale-110"
          />
        </div>

        <h2 class="text-xl md:text-2xl font-semibold font-sans text-[#0a2255] mt-3">
          Collin Brennan
        </h2>

        <p class="text-md font-semibold text-[#37507e] mt-1">
          Software Developer & CS Master's Student
        </p>
        <div class="mt-2 text-sm text-gray-600">
          Grand Valley State University • Michigan, USA
        </div>
        <div class="mt-2 text-sm text-gray-600">
          brenncol@mail.gvsu.edu
        </div>

        <!-- Vertical NavBar -->
        <NavBarColumn class="mb-5" />
      </div>

      <!-- Right Column: Page Content -->
      <main class="flex flex-col space-y-6 w-full max-w-3xl">
        <slot />
      </main>
    

      <!-- Right Sidebar: Sticky -->
      <aside class="hidden lg:flex flex-col md:sticky md:top-[104px] items-start w-64 space-y-4 mr-10">
        <!-- Social Buttons -->
        <div class="bg-white p-4 w-full space-y-3 shadow-sm rounded-lg border border-gray-200">
          <h3 class="text-[#0a2255] font-semibold text-xl mb-2">Connect</h3>

          <a
            href="https://linkedin.com/in/colbren04"
            target="_blank"
            class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition"
          >
            <img src="/linkedin2.png" alt="LinkedIn" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/collinb04"
            target="_blank"
            class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition"
          >
            <img src="/github.png" alt="GitHub" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span>GitHub</span>
          </a>

          <a
            href="/resume.pdf"
            download
            class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition"
          >
            <img src="/res (1).png" alt="Resume" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span>Resume</span>
          </a>
        </div>

        <!-- Daily Quote Box -->
        <div class="bg-[#e7f3ff] text-[#0a2255] font-medium px-2 py-4 w-full mt-2 rounded-lg">
          <div class="text-[#0a2255] font-bold mb-1">
            Daily Quote
          </div>
          <text class="text-sm">
            "When you grow up, you tend to get told that the world is the way it is, 
            and your life is just to live your life inside the world. Try not to bash into the walls too much. 
            Try to have a nice family life. Have fun, save a little money. That's a very limited life. 
            Life can be much broader, once you discover one simple fact, and that is everything around that you call life was made up by people who were no smarter than you. 
            And you can change it. You can influence it. You can build your own things that other people can use." - Steve Jobs
          </text>
        </div>
      </aside>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBarColumn from '~/components/NavBarColumn.vue'
import Footer from '~/components/Footer.vue'
import Appear from '~/components/Appear.vue'

const scrollContainer = ref(null)

function scrollToTop() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
img {
  display: block;
}
</style>
