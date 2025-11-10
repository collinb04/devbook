<!-- pages/index.vue -->
<template>
<Appear>
  <div class="min-h-screen flex bg-[#f7f9fc] rounded-lg font-[Lucida_Grande]">
    <!-- Right Column: Main Content -->
    <main class="flex-1 p-10 space-y-10 overflow-y-auto">
      <!-- Header -->
        <div class="border border-gray-300 bg-white px-6 py-4 shadow-sm">
        <h1 class="text-2xl font-bold mb-1 text-[#0a2255]">Home</h1>
        </div>
    
      <!-- Bio -->
       
      <section>
        <div class="h-[1px] bg-gray-200"></div>

        <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold mt-10 mb-10">
        Bio
        </h3>

        <p class="text-gray-700 leading-relaxed">
          I’m a Computer Science student with experience in software development across the full stack. 
          I have a strong infatuation with the intersection of education and technology, specifically information abstraction 
          and the use of AI to promote growth rather than learning atrophy. 
        </p>
        <p class="text-gray-700 leading-relaxed mt-3">
          I currently work for an AI startup specializing in forestry disease mitigation, 
          where I integrate PyTorch models into production systems to create seamless and effective user experiences.
        </p>
      </section>


      <!-- Interests -->
      <section>
        <div class="h-[1px] bg-gray-200"></div>

        <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold mt-10 mb-10">
        interests
        </h3>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>Software development and system design</li>
          <li>Entrepreneurship and product building</li>
          <li>Psychology and human behavior</li>
          <li>Education and Learning Strategies</li>
          <li>Sports, fitness, music, and cinematography</li>
        </ul>
      </section>

      <!-- Goals -->
      <section>
        <div class="h-[1px] bg-gray-200"></div>

        <h3 class="text-gray-400 uppercase tracking-wide text-sm font-semibold mt-10 mb-10">
        GOALS
        </h3>
        <p class="text-gray-700 leading-relaxed">
          My goal is to build technology-driven systems that enable people to learn, grow, and make confident decisions.
          I aim to merge technical precision with psychological understanding, from learning tools and mentorship
          platforms to SaaS products that truly solve human-centered problems.
        </p>
        <p class="text-gray-700 leading-relaxed mt-3">
          In the short term, I’m focused on mastering data structures & algorithms, refining my full-stack development
          skills, and launching projects that merge my interests in mentorship, learning, and applied AI.
        </p>
      </section>
    </main>
  </div>
</Appear>
</template>

