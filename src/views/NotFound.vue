<script setup>
// NotFound.vue - 404 Page
</script>

<template>
  <div class="not-found py-20">
    <div class="container-custom text-center">
      <div class="max-w-lg mx-auto">
        <h1 class="text-9xl font-bold text-primary-800 mb-4">404</h1>
        <h2 class="text-3xl font-bold mb-6">Page Not Found</h2>
        <p class="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <router-link to="/" class="btn-primary inline-block">
          Return to Home
        </router-link>
      </div>
    </div>
  </div>
</template>
