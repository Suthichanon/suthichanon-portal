<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Copy to clipboard function with better UX
const showNotification = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('suthichanon@gmail.com')
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  } catch (err) {
    console.log(err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = 'suthichanon@gmail.com'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
  }
}

// Scroll animations with enhanced effects - bidirectional
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element เข้ามาในหน้าจอ - เล่นอนิเมชั่น
        if (entry.target.classList.contains('scroll-animate-links')) {
          entry.target.classList.remove('animate-fade-out-right')
          entry.target.classList.add('animate-fade-in-left')
        } else if (entry.target.classList.contains('scroll-animate-projects')) {
          entry.target.classList.remove('animate-slide-down-stagger')
          entry.target.classList.add('animate-slide-up-stagger')
          // Add staggered animation to project cards
          const cards = entry.target.querySelectorAll('.project-card')
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('animate-slide-down')
              card.classList.add('animate-slide-up')
            }, index * 150)
          })
        } else if (entry.target.classList.contains('scroll-animate-contact')) {
          entry.target.classList.remove('animate-zoom-out')
          entry.target.classList.add('animate-zoom-in')
        } else {
          entry.target.classList.remove('animate-fade-out-down')
          entry.target.classList.add('animate-fade-in-up')
        }
      } else {
        // Element ออกจากหน้าจอ - เล่นอนิเมชั่นย้อนกลับ
        if (entry.target.classList.contains('scroll-animate-links')) {
          entry.target.classList.remove('animate-fade-in-left')
          entry.target.classList.add('animate-fade-out-right')
        } else if (entry.target.classList.contains('scroll-animate-projects')) {
          entry.target.classList.remove('animate-slide-up-stagger')
          entry.target.classList.add('animate-slide-down-stagger')
          const cards = entry.target.querySelectorAll('.project-card')
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.remove('animate-slide-up')
              card.classList.add('animate-slide-down')
            }, index * 100)
          })
        } else if (entry.target.classList.contains('scroll-animate-contact')) {
          entry.target.classList.remove('animate-zoom-in')
          entry.target.classList.add('animate-zoom-out')
        } else {
          entry.target.classList.remove('animate-fade-in-up')
          entry.target.classList.add('animate-fade-out-down')
        }
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -10px 0px'
  })

  const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-links, .scroll-animate-projects, .scroll-animate-contact')
  elements.forEach((el) => observer.observe(el))
})// Portfolio data
const profileData = ref({
  name: 'Suthichanon Poonkrankay',
  title: 'Web Developer',
  bio: 'Welcome to my digital portal! Explore my projects and connect with me.',
  avatar: '/imgprofile.png',
  links: [
    {
      title: 'GitHub',
      url: 'https://github.com/Suthichanon',
      icon: '/github-mark-white.png',
      description: 'My code repositories and open source contributions'
    }
  ],
  projects: [
    {
      title: 'Maintenance Service Agreement',
      description: 'Full-stack in house website built with React js and Node.js user 1@1.com password 123456  ',
      url: 'https://second-test-ma.web.app/',
      tech: ['React.js', 'typescript', 'Node.js', 'Firebase', 'chakraui']
    },
    {
      title: 'Littlerose Homemade Pastry',
      description: 'Be a part of creating the UI',
      url: 'https://littlerosepastry.com/',
      tech: ['Nextjs', 'Firebase', 'chakraui']
    },
    {
      title: 'Mega Town Online',
      description: 'E-commerce platform for five M Server in frontend role',
      url: 'https://megatown.online/',
      tech: ['Next.js', 'MariaDb', 'chakraui']
    },
    {
      title: 'UBU Spark',
      description: 'Be a part of creating the UI',
      url: 'https://spark.ubu.ac.th/th/home',
      tech: ['Next.js', 'Firebase', 'chakraui']
    },
    {
      title: 'Five M UI',
      description: 'Create a five m ui based on figma.',
      url: 'https://www.figma.com/design/tIkmYIRcThiYC8pEAJL0Al/HUD---%7C-BUBBLE-TOWN-%7C?node-id=14011-1904&p=f',
      tech: ['vue.js', 'tailwind']
    }
  ]
})
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">

    <!-- Success Notification Toast -->
    <div v-if="showNotification"
      class="fixed top-6 right-6 z-50 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-green-400/20 animate-slide-in-right">
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="font-medium">Email copied successfully! 📧</span>
      </div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob">
      </div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000">
      </div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000">
      </div>
      <!-- Additional floating elements -->
      <div class="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full animate-float animation-delay-1000"></div>
      <div class="absolute top-60 right-32 w-3 h-3 bg-pink-400/40 rounded-full animate-float animation-delay-3000">
      </div>
      <div class="absolute bottom-40 left-1/3 w-2 h-2 bg-yellow-400/50 rounded-full animate-float animation-delay-5000">
      </div>
    </div>

    <!-- Code Pattern Background -->
    <div class="absolute inset-0 bg-code-pattern opacity-5"></div>

    <!-- Header with Professional Design -->
    <header class="py-24 px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Profile Image Section -->
        <div class="relative inline-block mb-12">
          <div class="relative group">
            <!-- Subtle background glow -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-700">
            </div>

            <!-- Main profile image -->
            <img :src="profileData.avatar" :alt="profileData.name"
              class="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full mx-auto border-2 border-white/10 shadow-2xl shadow-black/50 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 object-cover backdrop-blur-sm">

            <!-- Minimal status indicator -->
            <div
              class="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full border-3 border-slate-900 shadow-lg">
              <div class="absolute inset-1 bg-white/90 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Name Section -->
        <div class="space-y-8">
          <div class="relative">
            <h1
              class="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight tracking-tight">
              {{ profileData.name }}
            </h1>
          </div>

          <!-- Simplified title -->
          <div class="text-xl md:text-2xl text-blue-200/80 font-light tracking-wide">
            {{ profileData.title }}
          </div>

          <!-- Clean bio -->
          <p class="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed font-light">
            {{ profileData.bio }}
          </p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-4 pb-12 relative z-10">
      <div class="max-w-6xl mx-auto">

        <!-- Quick Links Section -->
        <section class="mb-20 scroll-animate-links">
          <div class="text-center mb-12">
            <h2
              class="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div class="flex justify-center">
            <a v-for="(link, index) in profileData.links" :key="link.title" :href="link.url" target="_blank"
              rel="noopener noreferrer"
              class="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-500 border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              :style="{ animationDelay: index * 100 + 'ms' }">
              <!-- Glow effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>

              <div class="text-center relative z-10">
                <div class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img :src="link.icon" alt="" class="w-12 h-12 mx-auto" />
                </div>
                <h3 class="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {{ link.title }}
                </h3>
                <p class="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{{
                  link.description }}</p>
              </div>

              <!-- Corner decoration -->
              <div
                class="absolute top-4 right-4 w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </a>
          </div>
        </section>


        <!-- Projects Section with Enhanced Design -->
        <section class="mb-24 scroll-animate-projects">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h2
              class="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div class="w-32 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p class="text-gray-400 text-xl max-w-2xl mx-auto">Showcasing my expertise in modern web development</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div v-for="(project, index) in profileData.projects" :key="project.title"
              class="project-card group relative bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 overflow-hidden"
              :style="{ animationDelay: index * 150 + 'ms' }">

              <!-- Enhanced glow effect -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl">
              </div>

              <!-- Corner accent -->
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-3xl rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>

              <div class="relative z-10">
                <!-- Enhanced project header -->
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <div class="relative">
                      <div
                        class="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50">
                      </div>
                      <div class="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <span class="text-sm text-green-400 font-mono font-semibold tracking-wider">PRODUCTION</span>
                  </div>
                  <div class="text-sm text-gray-400 font-mono bg-slate-700/50 px-3 py-1 rounded-full">v{{ index + 1 }}.0
                  </div>
                </div>

                <!-- Project title with enhanced styling -->
                <h3
                  class="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-500 leading-tight">
                  {{ project.title }}
                </h3>

                <!-- Enhanced description -->
                <p class="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {{ project.description }}
                </p>

                <!-- Tech stack with enhanced design -->
                <div class="flex flex-wrap gap-2 mb-8">
                  <span v-for="tech in project.tech" :key="tech"
                    class="group-tech bg-gradient-to-r from-slate-700/80 to-slate-600/80 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-mono border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105">
                    {{ tech }}
                  </span>
                </div>

                <!-- Enhanced action buttons -->
                <div class="flex items-center justify-between">
                  <a :href="project.url" target="_blank" rel="noopener noreferrer"
                    class="group-link inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
                    <span>View Demo or Website</span>
                    <svg
                      class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <!-- GitHub icon with enhanced hover -->
                  <div
                    class="group-github w-12 h-12 bg-slate-700/50 hover:bg-slate-600/80 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg border border-slate-600/30 hover:border-gray-400/50">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                </div>

                <!-- Project metrics (optional) -->
                <div class="mt-6 pt-6 border-t border-slate-700/50 flex justify-between text-sm text-gray-500">
                  <span class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Frontend/Fullstack
                  </span>
                  <span class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    Responsive
                  </span>
                  <span class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Modern
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Call to action -->
          <div class="text-center mt-16">
            <div
              class="inline-flex items-center gap-2 bg-slate-800/40 backdrop-blur-sm rounded-full px-8 py-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-gray-300">More projects available on request</span>
              <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="text-center relative scroll-animate-contact">
          <div class="mb-12">
            <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div class="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 max-w-4xl mx-auto">
            <p class="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out through any of the platforms above!
            </p>

            <div class="flex justify-center gap-6 flex-wrap mb-8">
              <button @click="copyEmail"
                class="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <span class="flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Email
                </span>
              </button>

              <a href="/resume.pdf" target="_blank" download="Suthichanon_Resume.pdf"
                class="group relative bg-slate-700/50 hover:bg-slate-700/70 px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 backdrop-blur-sm border border-slate-600/50 hover:border-cyan-500/50">
                <span class="flex items-center gap-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </a>
            </div>

            <!-- Stats or additional info -->
            <div class="flex justify-center gap-12 text-center">
              <div>
                <div class="text-2xl font-bold text-cyan-400 mb-1">10+</div>
                <div class="text-sm text-gray-400 uppercase tracking-wide">Projects</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-400 mb-1">1</div>
                <div class="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div class="text-sm text-gray-400 uppercase tracking-wide">Available</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center text-gray-400 border-t border-slate-800/50 relative z-10 mt-20">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="text-red-500">❤️</span>
          <span>Made with</span>
          <span class="text-green-400 font-mono">Vue.js</span>
          <span>&</span>
          <span class="text-blue-400 font-mono">TypeScript</span>
        </div>
        <p>&copy; 2025 {{ profileData.name }}. All rights reserved.</p>
        <div class="mt-4 text-sm text-gray-500">
          <span class="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          Currently available for new opportunities
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Enhanced animations and effects */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(1deg);
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }

  33% {
    transform: translate(30px, -50px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }

  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes gradient-x {

  0%,
  100% {
    background-size: 200% 200%;
    background-position: left center;
  }

  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slide-up-stagger {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation classes */
.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 400% 400%;
  animation: gradient-x 3s ease infinite;
}


.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-out-right {
  animation: fade-out-right 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-slide-down {
  animation: slide-down 0.6s ease-out forwards;
}

.animate-slide-up-stagger {
  animation: slide-up-stagger 0.6s ease-out forwards;
}

.animate-slide-down-stagger {
  animation: slide-down-stagger 0.6s ease-out forwards;
}

.animate-zoom-in {
  animation: zoom-in 0.8s ease-out forwards;
}

.animate-zoom-out {
  animation: zoom-out 0.6s ease-out forwards;
}

.animate-fade-out-down {
  animation: fade-out-down 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out;
}

.animate-count-up {
  animation: count-up 1s ease-out 0.5s both;
}

/* Delay classes */
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-5000 {
  animation-delay: 5s;
}

/* Enhanced hover effects */
.group:hover img {
  animation: float 3s ease-in-out infinite;
}

/* Code pattern background */
.bg-code-pattern {
  background-image:
    radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
    radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 100px 100px;
}

/* Enhanced glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

.backdrop-blur-xl {
  backdrop-filter: blur(24px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.3), rgba(139, 92, 246, 0.3));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), rgba(139, 92, 246, 0.5));
}

/* Entrance animations */
section {
  animation: slideInUp 0.6s ease-out forwards;
}

.scroll-animate,
.scroll-animate-links,
.scroll-animate-projects,
.scroll-animate-contact {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.scroll-animate-links {
  transform: translateX(-50px);
}

.scroll-animate-projects {
  transform: translateY(40px);
}

.scroll-animate-contact {
  transform: scale(0.8);
}

.project-card {
  opacity: 0;
  transform: translateY(60px) scale(0.95);
  transition: all 0.8s ease-out;
}

.scroll-animate.animate-fade-in-up,
.scroll-animate-links.animate-fade-in-left,
.scroll-animate-projects.animate-slide-up-stagger,
.scroll-animate-contact.animate-zoom-in {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

/* Enhanced button effects */
.group:hover .w-4,
.group-link:hover .w-4 {
  filter: drop-shadow(0 0 8px currentColor);
}

/* Enhanced glow effects */
.group:hover,
.group-tech:hover {
  filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.15));
}

/* Text selection */
::selection {
  background: rgba(56, 189, 248, 0.3);
  color: white;
}

/* Focus states for accessibility */
button:focus,
a:focus {
  outline: 2px solid rgba(56, 189, 248, 0.5);
  outline-offset: 2px;
}

/* Improved performance */
.group,
.group-tech,
.group-link,
.group-github,
.scroll-animate,
.scroll-animate-links,
.scroll-animate-projects,
.scroll-animate-contact,
.project-card {
  will-change: transform, opacity;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .animate-blob {
    animation-duration: 10s;
  }

  .backdrop-blur-xl {
    backdrop-filter: blur(12px);
  }
}
</style>
