import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import en from '../locales/en.js';
import vi from '../locales/vi.js';

export const useLanguageStore = defineStore('language', () => {
  // State
  const currentLang = ref(localStorage.getItem('language') || 'en');
  
  // Languages available
  const languages = {
    en: {
      name: 'English',
      flag: '🇺🇸',
      translations: en
    },
    vi: {
      name: 'Tiếng Việt',
      flag: '🇻🇳',
      translations: vi
    }
  };
  
  // Getters
  const currentLanguage = computed(() => languages[currentLang.value]);
  const t = computed(() => currentLanguage.value.translations);
  
  // Actions
  function setLanguage(lang) {
    if (languages[lang]) {
      currentLang.value = lang;
      localStorage.setItem('language', lang);
    }
  }

  function toggleLanguage() {
    const newLang = currentLang.value === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
  }
  
  return { 
    currentLang, 
    languages, 
    currentLanguage, 
    t, 
    setLanguage,
    toggleLanguage
  };
});
