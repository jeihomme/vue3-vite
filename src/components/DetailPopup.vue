<template>
  <div class="popup">
    <div class="popup-content">
      <h2>Detail for {{ item.title }}</h2>
      <p>ID: {{ item.id }}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue';

defineProps(['item']);
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>