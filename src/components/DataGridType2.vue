<!-- primevue -->
<template>
  <DataTable :value="items">
    <Column field="id" header="ID"></Column>
    <Column field="title" header="Title"></Column>
  </DataTable>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const items = ref([
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
]);
</script>