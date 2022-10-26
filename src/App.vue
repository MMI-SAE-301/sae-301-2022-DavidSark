<script setup lang="ts">

</script>

<template>

  <!-- Affiche les pages -->
  <Suspense>
    <router-view />
  </Suspense>
</template>


<style>
body {
  overflow-x: hidden;
  background-image: url('images/fond_grain.png');
}
</style>