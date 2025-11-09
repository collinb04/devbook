<template>
  <div class="h-screen overflow-y-auto scrollbar-hide">
<!-- Top Navbar (Sticky) -->
<div class="sticky top-0 z-50">
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
    <!-- Main Content Area -->
    <div class="flex flex-col md:flex-row items-start md:ml-20 mt-10 md:space-x-8 px-4">
        <!-- Left Sidebar: Sticky -->
        <div class="flex flex-col items-center md:items-start md:sticky md:top-[104px]">
        <!-- Profile Image -->
        <div class="flex-shrink-0 w-48 h-40 md:w-72 md:h-64 overflow-hidden border-8 border-[#3b5998]">
            <img
            src="/me.jpeg"
            alt="Collin Brennan"
            class="w-full h-full object-cover scale-110"
            />
        </div>

        <h2 class="text-xl md:text-2xl font-semibold font-sans text-[#0a2255] mt-3">
            Collin Brennan
        </h2>

        <!-- Vertical NavBar -->
        <NavBarColumn />
        </div>


      <!-- Right Column: Page Content -->
      <main class="flex flex-col space-y-6 w-full max-w-3xl">
        <slot />
      </main>

<!-- Right Sidebar: Sticky -->
<aside class="hidden lg:flex flex-col md:sticky md:top-[104px] items-start w-64 space-y-4">

  <!-- Social Buttons -->
  <div class="bg-white p-4 w-full space-y-3 shadow-sm border border-gray-200">
    <h3 class="text-[#0a2255] font-semibold text-xl mb-2">Connect</h3>

    <a
      href="https://linkedin.com/in/colbren04"
      target="_blank"
      class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 hover:bg-[#e7f3ff] transition"
    >
      <img src="/linkedin2.png" alt="LinkedIn" class="bg-[#3b5998] w-10 h-10" />
      <span>LinkedIn</span>
    </a>

    <a
      href="https://github.com/collinb04"
      target="_blank"
      class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 hover:bg-[#e7f3ff] transition"
    >
      <img src="/github.png" alt="GitHub" class="bg-[#3b5998] w-10 h-10" />
      <span>GitHub</span>
    </a>

    <a
      href="/resume.pdf"
      download
      class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 hover:bg-[#e7f3ff] transition"
    >
      <img src="/res (1).png" alt="Resume" class="bg-[#3b5998] w-10 h-10" />
      <span>Resume</span>
    </a>
  </div>

</aside>


    </div>
  </div>
</template>


<style scoped>
img {
  display: block;
}
</style>
