import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCkeditorStore = defineStore('ckeditor', () => {
  const editorResult = ref('Say Something ...');

  return {
    editorResult
  };
});

export default useCkeditorStore;
