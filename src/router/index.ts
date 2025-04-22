import { createRouter, createWebHistory } from 'vue-router'
import BarSingle from '../views/BarSingle.vue'
import BarMulti from '../views/BarMulti.vue'
import PieChart from '../views/PieChart.vue'
import CKEditorView from '../views/CKEditorView.vue' // CKEditorView 컴포넌트 import
import LoadingBar from '../views/LoadingBar.vue'
import AlertModal from '../views/AlertModal.vue'

const routes = [
  // { path: '/', redirect: '/bar-single' },
  { path: '/', redirect: '/ckeditor' },
  { path: '/bar-single', component: BarSingle },
  { path: '/bar-multi', component: BarMulti },
  { path: '/pie', component: PieChart },
  {
    path: '/ckeditor', // 새로운 경로
    name: 'CKEditorView', // 새로운 이름
    component: CKEditorView, // 새로운 컴포넌트
  },
  {
    path: '/LoadingBar', // 새로운 경로
    name: 'LoadingBar', // 새로운 이름
    component: LoadingBar, // 새로운 컴포넌트
  },
  {
    path: '/AlertModal', // 새로운 경로
    name: 'AlertModal', // 새로운 이름
    component: AlertModal, // 새로운 컴포넌트
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
});

router.afterEach(() => {
});

export default router
