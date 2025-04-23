<template>
  <button @click="showAlert">기본 알림창 표시</button>
  <button @click="showConfirmation">테스트 알림창 표시</button>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();

const showAlert = () => {
  proxy.$swal('안녕하세요!');
};

const swal = proxy.$swal;
const showConfirmation = () => {
  swal.fire({
    title: '확인',
    text: '정말로 삭제하시겠습니까?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '네, 삭제할게요!',
    cancelButtonText: '아니요, 취소할게요!',
  }).then((result) => {
    if (result.isConfirmed) {
      // 확인 버튼 클릭 시 실행할 코드
      swal.fire(
        '삭제 완료!',
        '성공적으로 삭제되었습니다.',
        'success'
      );
    } else if (result.dismiss === swal.DismissReason.cancel) {
      // 취소 버튼 클릭 시 실행할 코드
      swal.fire(
        '취소됨',
        '삭제가 취소되었습니다.',
        'info'
      );
    }
  });
};
</script>
