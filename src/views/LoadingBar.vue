<template>
  <div>
    <button @click="startLoading">데이터 로딩 시작</button>
    <button @click="stopLoading">데이터 로딩 종료</button>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();
const isLoading = ref(false);

const startLoading = () => {
  isLoading.value = true;
  proxy.$loading.show({
    container: null, // 전체 화면에 표시
    canCancel: false, // 로딩 중 취소 불가능
    color: 'green', // 로딩 스피너 색상
    loader: 'spinner', // 로딩 스피너 종류 (기본값)
    text: '데이터 로딩 중...', // 로딩 메시지
    zIndex: 9999, // 다른 요소 위에 표시하기 위한 z-index 값
    isFullPage: true, // 전체 페이지 dim 처리
  });

  // 가상의 데이터 로딩 (2초 후 종료)
  setTimeout(() => {
    stopLoading();
    // 실제 데이터 로딩 로직
  }, 2000);
};

const stopLoading = () => {
  isLoading.value = false;
  proxy.$loading.hide();
};
</script>

<style scoped>
/* 필요에 따라 스타일 추가 */
</style>