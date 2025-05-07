<script setup>
import { useLanguageStore } from '../stores/language.js';

const languageStore = useLanguageStore();
</script>

<template>
  <div class="language-switcher">
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
