<template>
<Appear>
  <section class="px-4 md:px-12 py-10 rounded-lg bg-[#f0f2f5] text-[#0a2255] font-sans space-y-8">

    <!-- Header -->
    <div class="border border-gray-300 bg-white px-6 py-4 shadow-sm">
      <h1 class="text-2xl font-bold mb-1">Projects Feed</h1>
      <p class="text-sm text-gray-600">
        A collection of my software development work — in a style that feels like the old Facebook feed.
      </p>
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
          <p class="text-xs text-gray-600">Updated recently</p>
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
            <span class="font-semibold">Tech Stack:</span>
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
    name: "DSA Visualizer",
    description:
      "A web app that visually demonstrates algorithms and data structures with interactive animations and topic connections — built with Vue, Python, and FastAPI. It’s like an Obsidian-style learning map for mastering algorithms step by step, designed for developers who learn visually and structurally.",
    technologies: ["Vue", "FastAPI", "Python", "Tailwind"],
    link: "#",
  },
  {
    name: "Balatro Lite",
    description:
      "A Python-based card game merging poker logic and deckbuilding. Built with full OOP design principles and advanced scoring logic to mimic poker hands while tracking player progress. Future goal: add a frontend simulation in React.",
    technologies: ["Python", "OOP", "Flask"],
    link: "#",
  },
  {
    name: "Personality Test SaaS",
    description:
      "A career guidance platform powered by machine learning and feedback loops to generate personalized career roadmaps and match users with ideal mentors or coaches. It learns from user feedback to refine predictions over time.",
    technologies: ["FastAPI", "Vue", "PyTorch", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Edge Forestry",
    description:
      "A forestry disease mitigation platform using PyTorch and Flask to predict and visualize disease spread based on satellite imagery and sensor data. Focused on real-time inference and intuitive UX for researchers and foresters.",
    technologies: ["Flask", "PyTorch", "AWS"],
    link: "#",
  },
]
</script>
