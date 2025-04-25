<!-- ag-grid-vue -->
<template>
  <div>
    <!-- AG Grid 테이블 -->
    <ag-grid-vue
      class="ag-theme-alpine"
      style="width: 100%; height: 500px;"
      :rowData="items"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :modules="modules"
      @rowClicked="openPopup"
    ></ag-grid-vue>

    <!-- DetailPopup -->
    <DetailPopup v-if="isPopupVisible" :item="selectedItem" @close="closePopup" />

    <!-- RegistrationPopup -->
    <RegistrationPopup @submit="handleRegistrationSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { ClientSideRowModelModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // AG Grid 기본 스타일
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Alpine 테마 스타일
import DetailPopup from './DetailPopup.vue';
import RegistrationPopup from './RegistrationPopup.vue';

// AG Grid 모듈 등록
const modules = [ClientSideRowModelModule];

// 데이터 예시
const items = ref([
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
]);

// 컬럼 정의
const columnDefs = ref([
  { field: 'id', headerName: 'ID', sortable: true, filter: true },
  { field: 'title', headerName: 'Title', sortable: true, filter: true },
]);

// 기본 컬럼 설정
const defaultColDef = ref({
  resizable: true,
  sortable: true,
  filter: true,
});

// 팝업 상태 관리
const isPopupVisible = ref(false);
const selectedItem = ref(null);

function openPopup(event) {
  selectedItem.value = event.data; // 선택된 항목 저장
  isPopupVisible.value = true; // 팝업 표시
}

function closePopup() {
  isPopupVisible.value = false; // 팝업 닫기
}

function handleRegistrationSubmit(data) {
  // 새 항목 추가
  items.value.push({
    id: items.value.length + 1,
    title: data.title,
  });
}
</script>

<style scoped>
/* AG Grid 테마 스타일 */
.ag-theme-alpine {
  height: 500px;
  width: 100%;
}
</style>