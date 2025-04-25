<script setup>
// import { RouterLink } from 'vue-router';

import { /* @vite-ignore */ component as ckeditor } from '@ckeditor/ckeditor5-vue';

// 中文包
// import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

// 經典版型
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import { storeToRefs } from 'pinia';
// import useCkeditor from '../stores/ckeditor';

// import MyAdapterPlugin from '../utlis/myUploadAdapter';

// const ckeditorStore = useCkeditor();

// const { editorResult } = storeToRefs(ckeditorStore);

// 控制 ckeditor 的啟用
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['ready', 'foucs', 'blur', 'input', 'destroy']);

// 存放版型，用來傳入
const editor = ClassicEditor;

// 存放 Editor 的設定 (Ex: 工具列)
const editorConfig = {
  // extraPlugins: [MyAdapterPlugin],
  // 語言 中文
  language: 'ko',

  // 工具列
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      // '|',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo'
    ]
  }
};

// 準備
const onEditorReady = () => {
  emit('ready');
};

// 聚焦
const onEditorFoucs = () => {
  emit('foucs');
};

// 失去焦點
const onEditorBlur = () => {
  emit('blur');
};

// 打字中
const onEditorInput = () => {
  emit('input');
};

// 銷毀時
const onEditorDestroy = () => {
  emit('destroy');
};
</script>

<template>
  <div id="ckeditor">
    <!-- 套件放置處 -->
    <ckeditor
      :editor="editor"
      :config="editorConfig"
      :disabled="disabled"
      @ready="onEditorReady"
      @foucs="onEditorFoucs"
      @blur="onEditorBlur"
      @input="onEditorInput"
      @destroy="onEditorDestroy"
    />
    <!-- v-model="editorResult" -->
  </div>
</template>

<style scoped>
#ckeditor :deep(.ck-editor__editable) {
  min-height: 200px;
  max-height: 500px;
  color: #1a202c;
}

/* a {
  position: fixed;
  bottom: 16px;
  right: 16px;
} */
</style>
