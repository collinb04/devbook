<template>
  <div ref="scrollContainer" class="h-screen overflow-y-auto scrollbar-hide">
    <!-- Top Navbar (Sticky) -->
    <div class="sticky top-0 z-50">
      <!-- Main Navbar -->
      <nav class="flex items-center justify-between bg-[#3b5998] px-6 py-3 shadow-md">
        <!-- Left side (logo / brand) -->
        <div class="flex items-center space-x-2">
          <button 
            class="text-white text-2xl font-bold font-sans tracking-tight ml-4 md:ml-10 hover:scale-105 transition"
            @click.prevent="scrollToTop"
          >
            collinbook
          </button>
        </div>

        <!-- Mobile menu button -->
        <button 
          class="text-white focus:outline-none md:hidden"
          @click.stop="mobileMenuOpen = !mobileMenuOpen"
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
        <p class="text-[#3b5998] font-medium ml-10">
          Welcome to collinbook — my personal profile feed!
        </p>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div 
        v-show="mobileMenuOpen"
        class="md:hidden bg-white shadow-lg"
      >
        <nav class="flex flex-col p-4">
          <NuxtLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 text-[#0a2255] text-base font-semibold transition hover:text-[#6c86bd]"
            :class="route.path === link.path ? 'bg-[#e7f3ff] rounded-lg font-bold' : 'bg-white'"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
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

        <div class="flex flex-row lg:hidden">
          <a href="https://linkedin.com/in/colbren04" target="_blank" class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/linkedin2.png" alt="LinkedIn" class="bg-[#3b5998] rounded-lg w-10 h-10" />
          </a>

          <a href="https://github.com/collinb04" target="_blank" class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/github.png" alt="GitHub" class="bg-[#3b5998] rounded-lg w-10 h-10" />
          </a>

          <a href="/resume.pdf" download class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/res (1).png" alt="Resume" class="bg-[#3b5998] rounded-lg w-10 h-10" />
          </a>
        </div>

        <p class="text-md font-semibold text-[#37507e] mt-1">
          Software Engineer
        </p>
        <div class="mt-2 text-sm text-gray-600">
          Grand Rapids • Michigan, USA
        </div>
        <div class="mt-2 text-sm text-gray-600">
          colbren04@gmail.com
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

          <a href="https://linkedin.com/in/colbren04" target="_blank" class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/linkedin2.png" alt="LinkedIn" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span class="truncate max-w-[120px] block">LinkedIn</span>
          </a>

          <a href="https://github.com/collinb04" target="_blank" class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/github.png" alt="GitHub" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span class="truncate max-w-[120px] block">GitHub</span>
          </a>

          <a href="/resume.pdf" download class="flex items-center space-x-3 text-[#0a2255] font-semibold py-2 px-2 rounded-lg hover:bg-[#e7f3ff] transition">
            <img src="/res (1).png" alt="Resume" class="bg-[#3b5998] rounded-lg w-10 h-10" />
            <span class="truncate max-w-[120px] block">Resume</span>
          </a>
        </div>

        <!-- Daily Quote Box -->
        <div class="bg-[#e7f3ff] text-[#0a2255] font-medium px-2 py-4 w-full mt-2 rounded-lg">
          <div class="text-[#0a2255] font-bold mb-1">
            Daily Quote
          </div>
          <p v-if="loadingQuote" class="text-sm">Loading...</p>
          <p v-else-if="quoteError" class="text-sm">{{ quoteError }}</p>
          <p v-else class="text-sm">
            "{{ dailyQuote.quote }}" 
            <span v-if="dailyQuote.author" class="block mt-2 text-left">- {{ dailyQuote.author }}</span>
          </p>
        </div>
      </aside>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBarColumn from '~/components/NavBarColumn.vue'
import Footer from '~/components/Footer.vue'

const route = useRoute()
const scrollContainer = ref(null)
const mobileMenuOpen = ref(false)
const dailyQuote = ref({ quote: '', author: '' })

const links = [
  { name: 'Home', path: '/' },
  { name: 'Education & Work', path: '/education' },
  { name: 'Projects & Skills', path: '/projects' },
]

// Curated entrepreneurship/motivational quotes
const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.", author: "Mark Zuckerberg" },
  { quote: "Ideas are easy. Implementation is hard.", author: "Guy Kawasaki" },
  { quote: "Don't worry about failure; you only have to be right once.", author: "Drew Houston" },
  { quote: "If you are not embarrassed by the first version of your product, you've launched too late.", author: "Reid Hoffman" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "It's fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates" },
  { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
  { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
  { quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
  { quote: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
  { quote: "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.", author: "G.K. Chesterton" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { quote: "Just when the caterpillar thought the world was ending, he turned into a butterfly.", author: "Proverb" },
  { quote: "Successful entrepreneurs are givers and not takers of positive energy.", author: "Anonymous" },
  { quote: "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.", author: "Vaibhav Shah" },
  { quote: "Try not to become a person of success, but rather try to become a person of value.", author: "Albert Einstein" },
  { quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { quote: "Great things never come from comfort zones.", author: "Anonymous" },
  { quote: "Dream bigger. Do bigger.", author: "Anonymous" },
  { quote: "Don't stop when you're tired. Stop when you're done.", author: "Anonymous" },
  { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Anonymous" },
  { quote: "Do something today that your future self will thank you for.", author: "Anonymous" }
]

function scrollToTop() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Get quote based on day of year (changes daily)
function getDailyQuote() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const oneDay = 1000 * 60 * 60 * 24
  const dayOfYear = Math.floor(diff / oneDay)
  
  // Use day of year to pick a quote (same quote all day)
  const index = dayOfYear % quotes.length
  dailyQuote.value = quotes[index]
}

// Watch for route changes and scroll to top
watch(() => route.path, async () => {
  await nextTick()
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
})

// Set daily quote on mount
onMounted(() => {
  getDailyQuote()
})
</script>

<style scoped>
img {
  display: block;
}
</style>