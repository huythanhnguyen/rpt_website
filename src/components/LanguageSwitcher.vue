<script setup>
import { useLanguageStore } from '../stores/language.js';
import { ref, onMounted, onUnmounted } from 'vue';

const languageStore = useLanguageStore();
const languageKey = ref(0);

// Force component re-render when language changes
const handleLanguageChange = () => {
  languageKey.value++;
};

onMounted(() => {
  document.addEventListener('language-changed', handleLanguageChange);
});

onUnmounted(() => {
  document.removeEventListener('language-changed', handleLanguageChange);
});
</script>

<template>
  <div class="language-switcher" :key="languageKey">
    <button
      @click="languageStore.toggleLanguage"
      class="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
      :title="'Switch to ' + (languageStore.currentLang === 'en' ? 'Tiếng Việt' : 'English')"
    >
      <span class="text-xl">{{ languageStore.currentLanguage.flag }}</span>
      <span class="hidden md:inline-block text-sm font-medium text-gray-700">
        {{ languageStore.currentLanguage.name }}
      </span>
    </button>
  </div>
</template>
