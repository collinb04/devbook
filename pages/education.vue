<template>
  <Appear>
  <section class="flex flex-col space-y-10 rounded-lg bg-[#f7f9fc] p-8 font-[Lucida_Grande]">
    <!-- Header -->
    <div class="border border-gray-300 bg-white px-6 py-4 shadow-sm">
      <h1 class="text-2xl font-bold mb-1">Education & Work Experience</h1>
      <p class="text-sm text-gray-600">
        A collection of my current and past work experiences/education.
      </p>
    </div>

    <div class="h-[1px] bg-gray-200"></div>
    
    <!-- Work Experience -->
    <div class="flex flex-col space-y-8">
      <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold">
        Experience
      </h3>

      <div v-for="(job, i) in jobs" :key="i" class="flex items-start space-x-4">
        <div class="h-20 w-20 flex-shrink-0">
          <img :src="job.logo" alt="Logo" class="object-contain" />
        </div>
        <div>
          <h4 class="text-[#0a2255] font-semibold text-lg hover:text-[#6c86bd]">
            <a :href="job.link" target="_blank">{{ job.company }}</a>
          </h4>
          <p class="text-[#0a2255] text-base">{{ job.role }}</p>
          <p class="flex flex-wrap items-center space-x-2 text-gray-400 text-sm mt-1">
            <span>{{ job.dates }}</span>
            <img src="/locationMarker.png" alt="Location" class="w-2 h-4" />
            <span>{{ job.location }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="h-[1px] bg-gray-200"></div>

    <!-- Education -->
    <div class="flex flex-col space-y-8">
      <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold">
        College
      </h3>

      <div v-for="(edu, i) in education" :key="i" class="flex items-start space-x-4">
        <div class="h-20 w-20 flex-shrink-0">
          <img :src="edu.logo" alt="Logo" class="object-contain" />
        </div>
        <div>
          <h4 class="text-[#0a2255] font-semibold text-lg">{{ edu.school }}</h4>
          <p class="text-[#0a2255] text-base">{{ edu.degree }}</p>
          <p class="flex flex-wrap items-center space-x-2 text-gray-400 text-sm mt-1">
            <span>{{ edu.dates }}</span>
            <img src="/locationMarker.png" alt="Location" class="w-2 h-4" />
            <span>{{ edu.location }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="h-[1px] bg-gray-200"></div>

    <!-- Awards -->
    <div class="flex flex-col space-y-6">
      <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold">
        Awards & Activities
      </h3>

      <div>
        <h4 class="text-[#0a2255] font-semibold text-lg">Excellence Awards</h4>
        <ul class="list-disc list-inside text-[#0a2255] text-base">
          <li>Legal Issues in Cybersecurity</li>
          <li>Communicating with Others</li>
        </ul>
        <p class="flex flex-wrap items-center space-x-2 text-gray-400 text-sm mt-1">
          <span>Western Governors University</span>
          <img src="/locationMarker.png" alt="Location" class="w-2 h-4" />
          <span>Salt Lake City, UT</span>
        </p>
      </div>
    </div>

    <div class="h-[1px] bg-gray-200"></div>

    <!-- Certifications -->
    <div class="flex flex-col space-y-6">
      <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold">
        Certifications
      </h3>

      <div class="space-y-2">
        <p class="text-[#0a2255] text-base">
          <span class="font-semibold">CompTIA |</span> Network+, Security+, CYSA+, Project+, PenTest+, A+
        </p>
        <p class="text-[#0a2255] text-base">
          <span class="font-semibold">(ISC)² |</span> Systems Security Certified Practitioner (SSCP)
        </p>
        <p class="text-[#0a2255] text-base">
          <span class="font-semibold">ITIL |</span> v4 Foundation PeopleCert
        </p>
        <p class="text-[#0a2255] text-base">
          <span class="font-semibold">Linux Professional Institute |</span> Linux Essentials Certification
        </p>
      </div>
    </div>

    <div class="h-[1px] bg-gray-200"></div>

    <!-- Other Work -->
    <div class="flex flex-col space-y-8">
      <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold">
        Other Work Experience
      </h3>

      <div v-for="(exp, i) in otherWork" :key="i" class="flex items-start space-x-4">
        <div class="h-20 w-20 flex-shrink-0">
          <img :src="exp.logo" alt="Logo" class="object-contain rounded-md" />
        </div>
        <div>
          <h4 class="text-[#0a2255] font-semibold text-lg">{{ exp.company }}</h4>
          <p class="text-[#0a2255] text-base">{{ exp.role }}</p>
          <p class="flex flex-wrap items-center space-x-2 text-gray-400 text-sm mt-1">
            <span>{{ exp.dates }}</span>
            <img src="/locationMarker.png" alt="Location" class="w-2 h-4" />
            <span>{{ exp.location }}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  </Appear>
</template>

<script setup>
const jobs = [
  {
    company: "Edge Forestry",
    role: "Software Developer",
    dates: "Aug 2025 - Present",
    location: "Grand Rapids, MI",
    logo: "/leaves.png",
    link: "https://edgeforestry.com/"
  },
  {
    company: "Blue Nucleus",
    role: "Software Developer",
    dates: "May 2025 - Aug 2025",
    location: "Grand Rapids, MI",
    logo: "/gv.png",
    link: "https://www.gvsu.edu/bluenucleus/about-blue-nucleus-5.htm"
  }
]

const education = [
  {
    school: "Grand Valley State University",
    degree: "Master of Science in Applied Computer Science",
    dates: "Expected Graduation: Apr 2027",
    location: "Grand Rapids, MI",
    logo: "/gv.png"
  },
  {
    school: "Western Governors University",
    degree: "Bachelor of Science in Cybersecurity",
    dates: "Aug 2024",
    location: "Salt Lake City, UT",
    logo: "/western-governors-university.png"
  }
]

const otherWork = [
  {
    company: "Haslett High School",
    role: "Varsity Lacrosse Coach - Offensive Coordinator",
    dates: "Jun 2022 - Aug 2024",
    location: "Haslett, MI",
    logo: "/haslett.png"
  },
  {
    company: "Haslett High School",
    role: "Varsity Lacrosse - Social Media Manager",
    dates: "Jun 2022 - Aug 2024",
    location: "Haslett, MI",
    logo: "/haslett.png"
  },
  {
    company: "Mona Shores High School",
    role: "Varsity Lacrosse - Graphic Designer",
    dates: "Jun 2024 - Jun 2025",
    location: "Mona Shores, MI",
    logo: "/ms.png"
  },
  {
    company: "Okemos Public Schools",
    role: "Child Care Assistant",
    dates: "Jul 2022 - Jan 2023",
    location: "Okemos, MI",
    logo: "/ops.png"
  }
]
</script>

<style scoped>
img {
  display: block;
}
</style>
