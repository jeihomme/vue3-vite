import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import CKEditor from '@ckeditor/ckeditor5-vue'
// import { Ckeditor } from '@ckeditor/ckeditor5-vue'

// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/css/index.css'; // 스타일 import

// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(router)
// app.use( CKEditor )
// app.use(Ckeditor)
// app.use(Loading)
// app.use(VueSweetalert2);

app.mount('#app')
