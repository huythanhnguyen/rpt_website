import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
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
      // Force UI update by dispatching a custom event
      document.dispatchEvent(new CustomEvent('language-changed'));
    }
  }

  function toggleLanguage() {
    const newLang = currentLang.value === 'en' ? 'vi' : 'en';
    setLanguage(newLang);
  }

  // Watch for language changes from other tabs/windows
  window.addEventListener('storage', (event) => {
    if (event.key === 'language' && event.newValue && event.newValue !== currentLang.value) {
      currentLang.value = event.newValue;
    }
  });
  
  return { 
    currentLang, 
    languages, 
    currentLanguage, 
    t, 
    setLanguage,
    toggleLanguage
  };
});
