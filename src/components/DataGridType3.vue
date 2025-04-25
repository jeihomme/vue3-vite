<!-- vue-good-table-next -->
<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
  />
</template>

<script setup>
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

const columns = [
  { label: 'ID', field: 'id' },
  { label: 'Title', field: 'title' },
];

const rows = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
];
</script>