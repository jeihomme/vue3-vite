<!-- filepath: e:\ckeditor5-vue-example-main-2nd\ckeditor5-vue-example-main\src\components\DataGridType3.vue -->
<template>
  <div class="table-container">
    <h2>Item List</h2>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      class="custom-table"
      @cell-click="handleCellClick"
    />

    <!-- DetailPopup -->
    <DetailPopup v-if="isPopupVisible" :item="selectedItem" @close="closePopup" />

    <!-- RegistrationPopup -->
    <!-- <RegistrationPopup @submit="handleRegistrationSubmit" /> -->
    <RegistrationPopup @submit="handleRegistrationSubmit" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import DetailPopup from './DetailPopup.vue'
import RegistrationPopup from './RegistrationPopup.vue'

// 테이블 컬럼 정의
const columns = [
  { label: 'ID', field: 'id', sortable: false }, // 정렬 비활성화
  {
    label: 'Title',
    field: 'title',
    sortable: false,
    tdClass: 'clickable', // 클릭 가능한 셀에 클래스 추가
  },
]

// 테이블 데이터 정의
const rows = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
]

// 팝업 상태 관리
const isPopupVisible = ref(false)
const selectedItem = ref(null)

// 셀 클릭 핸들러
const handleCellClick = (row) => {
  selectedItem.value = row
  isPopupVisible.value = true
}

// 팝업 닫기 핸들러
const closePopup = () => {
  isPopupVisible.value = false
}

function handleRegistrationSubmit(data) {
  // 등록 처리 로직
  console.log('Registration data:', data)
  // 팝업 닫기
  closePopup()
}
</script>

<style scoped>
.table-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.custom-table .vgt-table {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #ddd;
}

.custom-table .vgt-table th {
  background-color: #007ad9;
  color: white;
  text-align: center;
}

.custom-table .vgt-table td {
  text-align: center;
}

.custom-table .vgt-table td.clickable {
  cursor: pointer;
  color: #007ad9;
  text-decoration: underline;
}

.custom-table .vgt-table td.clickable:hover {
  color: #0056a3;
}
</style>