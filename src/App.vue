<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  
  <ul>
    <li><RouterLink :to="{ name: 'Editor' }">Editor</RouterLink></li>
    <!-- <li><RouterLink :to="{ name: 'Preview' }">GoPreview</RouterLink></li> -->
    <li><RouterLink :to="{ name: 'LoadingBar' }">LoadingBar</RouterLink></li>
    <li><RouterLink :to="{ name: 'AlertModal' }">AlertModal</RouterLink></li>
    <li><RouterLink :to="{ name: 'Chart' }">Chart</RouterLink></li>
  </ul>
  
  <RouterView />
</template>
