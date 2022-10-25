<script setup lang="ts">

import headerVue from '@/components/header.vue';
</script>

<template>
  <div>
    <RouterLink class="text-red-600 underline" to="/">
      lien vers
      <code class="font-mono">/src/pages/index.vue</code>
    </RouterLink>

    <div>
      <headerVue></headerVue>
    </div>
  </div>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view />
  </Suspense>
</template>

