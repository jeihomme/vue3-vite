<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import useCkeditor from '../stores/ckeditor';

const ckeditorStore = useCkeditor();

const { editorResult } = storeToRefs(ckeditorStore);
</script>

<template>
  <div v-html="editorResult" />
  <RouterLink :to="{ name: 'Editor' }">GoEditor</RouterLink>
</template>

<style scoped>
a {
  position: fixed;
  bottom: 16px;
  left: 16px;
}
</style>
