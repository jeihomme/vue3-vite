<template>
  <!-- <div class="vl-parent"> -->
      <LoadingBar
        v-model:active="isLoading"
        :on-cancel="onCancel"
      />
               <!-- :can-cancel="true" -->
               <!-- :is-full-page="fullPage" -->

      <!-- <label><input type="checkbox" v-model="fullPage">Full page?</label> -->
      <button @click.prevent="doAjax">fetch Data</button>
  <!-- </div> -->
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const isLoading = ref(false);
  // const fullPage = ref(true)

  const doAjax = () => {
      isLoading.value = true;
      // simulate AJAX
      console.log('User start the loader.');
      setTimeout(() => {
          isLoading.value = false
      }, 5000);
  };

  const onCancel = () => {
      console.log('User cancelled the loader.');
  };

  // onMounted(()=>{
  //   doAjax();
  // });
</script>
