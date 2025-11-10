<template>
<Appear>
  <section class="px-4 md:px-12 py-10 rounded-lg bg-[#f0f2f5] text-[#0a2255] font-sans space-y-8">

    <!-- Header -->
    <div class="border border-gray-300 bg-white px-6 py-4 shadow-sm">
      <h1 class="text-2xl font-bold mb-1">Projects Feed</h1>
    </div>

    <!-- Project Feed -->
    <div v-for="project in projects" :key="project.name"
      class="border border-gray-300 bg-white shadow-sm hover:shadow-md transition"
    >
      <!-- Header Bar (like user + post time) -->
      <div class="flex items-center space-x-3 px-4 py-3 border-b border-gray-200 bg-[#e7f3ff]">
        <div class="w-10 h-10 bg-[#3b5998] flex items-center justify-center text-white font-bold text-lg">
          {{ project.name[0] }}
        </div>
        <div>
          <h3 class="font-semibold text-lg">{{ project.name }}</h3>
        </div>
      </div>

      <!-- Description Preview -->
      <div class="px-5 py-4 text-sm leading-relaxed">
        <p v-if="!expandedProjects.includes(project.name)">
          {{ truncateText(project.description, 120) }}
          <span
            v-if="project.description.length > 120"
            @click="toggleExpand(project.name)"
            class="text-[#3b5998] cursor-pointer font-semibold"
          >
            See more
          </span>
        </p>

        <!-- Expanded View -->
        <div v-else>
          <p>{{ project.description }}</p>

          <div v-if="project.technologies" class="mt-3 text-sm">
            <span class="font-semibold">Tech Stack: </span>
            <span>{{ project.technologies.join(', ') }}</span>
          </div>

          <div v-if="project.link" class="mt-4">
            <a
              :href="project.link"
              target="_blank"
              class="inline-block text-[#3b5998] font-semibold hover:underline"
            >
              View Project →
            </a>
          </div>

          <div
            @click="toggleExpand(project.name)"
            class="mt-3 text-[#3b5998] cursor-pointer font-semibold"
          >
            See less
          </div>
        </div>
      </div>
    </div>

  </section>
</Appear>
</template>

<script setup>
import { ref } from 'vue'

const expandedProjects = ref([])

const toggleExpand = (name) => {
  if (expandedProjects.value.includes(name)) {
    expandedProjects.value = expandedProjects.value.filter((n) => n !== name)
  } else {
    expandedProjects.value.push(name)
  }
}

const truncateText = (text, length) =>
  text.length > length ? text.substring(0, length) + '...' : text

const projects = [
  {
  name: "Edge Forestry Web App",
  description:
    "A forestry disease mitigation platform using PyTorch and Flask to predict and visualize disease spread based on drone imagery. Focused on real-time inference and intuitive UX for researchers and foresters. (This code is private to Edge Forestry)",
  technologies: ["Vue", "Flask", "PyTorch", "AWS"],
  link: "https://edgeforestry.com/",
  },
  {
    name: "Edge Forestry Mobile Device and Software",
    description:
      "A raspberry pi device made for offline use that utilizes two different disease models to predict disease probability. This device focuses heavily on ease of use for foresters with features like kiosk mode, usb watching, and results in under two touches.",
    technologies: ["Flutter", "Flask", "PyTorch", "Raspberry Pi"],
    link: "https://github.com/collinb04/rasp-pi-flutter-app",
  },
  {
    name: "Refract",
    description:
      "Refract is a productivity and focus platform designed to help users optimize their attention, energy, and output in a structured, adaptive way. It blends behavioral science, technology, and habit formation into a sleek, user-centric experience.",
    technologies: ["Flask", "Nuxt 3"],
    link: "#",
  },
]
</script>
