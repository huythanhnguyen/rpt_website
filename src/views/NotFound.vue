<script setup>
import { useLanguageStore } from '../stores/language.js';

// Get language store for translations
const { t } = useLanguageStore();
</script>

<template>
  <div class="not-found py-20">
    <div class="container-custom text-center">
      <div class="max-w-lg mx-auto">
        <h1 class="text-9xl font-bold text-primary-800 mb-4">404</h1>
        <h2 class="text-3xl font-bold mb-6">{{ t.notFound.title }}</h2>
        <p class="text-gray-600 mb-8">
          {{ t.notFound.subtitle }}
        </p>
        <router-link to="/" class="btn-primary inline-block">
          {{ t.notFound.returnHome }}
        </router-link>
      </div>
    </div>
  </div>
</template>
