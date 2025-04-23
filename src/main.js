import { createApp } from 'vue';
import './style.css';
import { createPinia } from 'pinia';

import router from './router';
import App from './App.vue';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'; // 로딩 오버레이 CSS import

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueSweetalert2)

// 전역 컴포넌트로 등록
app.component('LoadingBar', Loading); // 전역 컴포넌트로 등록 (선택 사항)

app.mount('#app');

// createApp(App).use(router).mount('#app'); 
