<script setup>
import { useLanguageStore } from '../stores/language.js';
import agentDiagram from '../assets/agent2agent-diagram.png';

// Get language store for translations
const { t } = useLanguageStore();
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      <div class="container-custom py-20 md:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="heading-1 mb-6">{{ t.hero.title.split('AI Agents')[0] }}<span class="text-secondary-300">AI Agents</span></h1>
            <p class="text-xl mb-8 text-gray-100">
              {{ t.hero.subtitle }}
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#about" class="btn-primary bg-secondary-600 hover:bg-secondary-700 text-center">{{ t.hero.learnMore }}</a>
              <router-link to="/demo" class="btn-secondary bg-white text-primary-900 border-white text-center">{{ t.hero.tryDemo }}</router-link>
            </div>
          </div>
          
          <div class="hidden lg:block">
            <div class="relative">
              <div class="absolute -left-6 -top-6 w-24 h-24 bg-secondary-400 rounded-full opacity-20"></div>
              <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-secondary-500 rounded-full opacity-20"></div>
              
              <!-- AI Agent Impersonation Panel -->
              <div class="relative bg-gradient-to-b from-blue-900 to-purple-900 rounded-2xl shadow-xl p-6 z-10">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <!-- Impersonation Interface -->
                <div class="flex flex-col items-center justify-between space-y-6 py-4">
                  <!-- Primary AI Agent -->
                  <div class="bg-blue-800/50 rounded-xl p-6 w-4/5 flex flex-col items-center">
                    <div class="h-10 w-10 text-white mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2Z"></path>
                        <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5v11a2.5 2.5 0 0 1-5 0v-11A2.5 2.5 0 0 1 14.5 4Z"></path>
                        <path d="M19.5 7A2.5 2.5 0 0 1 22 9.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 19.5 7Z"></path>
                        <path d="M4.5 7A2.5 2.5 0 0 1 7 9.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 4.5 7Z"></path>
                      </svg>
                    </div>
                    <p class="text-center text-white text-base">AI Agent</p>
                  </div>
                  
                  <!-- Connection Line with Shield -->
                  <div class="h-32 flex flex-col items-center justify-between">
                    <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                    <div class="w-[1.5px] h-14 bg-blue-400"></div>
                    <div class="rounded-full bg-blue-900/90 p-2 border border-blue-500 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div class="w-[1.5px] h-14 bg-blue-400"></div>
                    <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  
                  <!-- Target AI Agent -->
                  <div class="border-2 border-dashed border-gray-500/40 rounded-xl p-6 w-4/5 flex flex-col items-center">
                    <div class="h-10 w-10 text-gray-400 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2Z"></path>
                        <path d="M14.5 4A2.5 2.5 0 0 1 17 6.5v11a2.5 2.5 0 0 1-5 0v-11A2.5 2.5 0 0 1 14.5 4Z"></path>
                        <path d="M19.5 7A2.5 2.5 0 0 1 22 9.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 19.5 7Z"></path>
                        <path d="M4.5 7A2.5 2.5 0 0 1 7 9.5v5a2.5 2.5 0 0 1-5 0v-5A2.5 2.5 0 0 1 4.5 7Z"></path>
                      </svg>
                    </div>
                    <p class="text-center text-gray-300 text-base">Target AI Agent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="heading-2 mb-6 text-gray-900">{{ t.about.title }}</h2>
          <p class="text-xl text-gray-600">
            {{ t.about.subtitle }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div class="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t.about.userAI.title }}</h3>
            <p class="text-gray-600">
              {{ t.about.userAI.description }}
            </p>
          </div>
          
          <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div class="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t.about.business.title }}</h3>
            <p class="text-gray-600">
              {{ t.about.business.description }}
            </p>
          </div>
          
          <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
            <div class="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t.about.a2a.title }}</h3>
            <p class="text-gray-600">
              {{ t.about.a2a.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Solutions Section -->
    <section id="solutions" class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="heading-2 mb-6 text-gray-900">{{ t.solutions.title }}</h2>
          <p class="text-xl text-gray-600">
            {{ t.solutions.subtitle }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-4">{{ t.solutions.a2a.title }}</h3>
              <p class="text-gray-600 mb-6">
                {{ t.solutions.a2a.description }}
              </p>
              <ul class="space-y-3">
                <li v-for="(feature, index) in t.solutions.a2a.features" :key="index" class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-4">{{ t.solutions.mcp.title }}</h3>
              <p class="text-gray-600 mb-6">
                {{ t.solutions.mcp.description }}
              </p>
              <ul class="space-y-3">
                <li v-for="(feature, index) in t.solutions.mcp.features" :key="index" class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technology Section -->
    <section id="technology" class="section bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="heading-2 mb-6 text-gray-900">{{ t.technology.title }}</h2>
          <p class="text-xl text-gray-600">
            {{ t.technology.subtitle }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img :src="agentDiagram" alt="Google AGENT2AGENT Diagram showing MCP and A2A technologies" class="rounded-xl shadow-lg w-full" />
          </div>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-bold mb-2">{{ t.technology.a2a.title }}</h3>
              <p class="text-gray-600">
                {{ t.technology.a2a.description }}
              </p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-2">{{ t.technology.mcp.title }}</h3>
              <p class="text-gray-600">
                {{ t.technology.mcp.description }}
              </p>
            </div>
            
            <div>
              <h3 class="text-xl font-bold mb-2">{{ t.technology.human.title }}</h3>
              <p class="text-gray-600">
                {{ t.technology.human.description }}
              </p>
            </div>
            
            <div class="pt-4">
              <router-link to="/demo" class="btn-primary inline-block">{{ t.technology.tryDemo }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="bg-primary-900 text-white py-16">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t.cta.title }}</h2>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          {{ t.cta.subtitle }}
        </p>
        <router-link to="/demo" class="btn-primary bg-white text-primary-900 hover:bg-gray-100 text-lg px-8 py-3">
          {{ t.cta.button }}
        </router-link>
      </div>
    </section>
  </div>
</template>
