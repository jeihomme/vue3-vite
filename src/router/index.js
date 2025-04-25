import { createRouter, createWebHistory } from 'vue-router'
import DataGridView from '../views/DataGridView.vue'
import DataGridType2View from '../views/DataGridType2View.vue'
import DataGridType3View from '../views/DataGridType3View.vue'
import Editor from '../views/Editor.vue'
import Preview from '../views/Preview.vue'
import LoadingBar from '../views/LoadingBar.vue'
import AlertModal from '../views/AlertModal.vue'
// eslint-disable-next-line semi
import Chart from '../views/Chart.vue'

const BASE_URL = import.meta.BASE_URL || '/' // import.meta.env로 변경

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/DataGridView'
    },
    {
      path: '/DataGridView',
      name: 'DataGridView',
      component: DataGridView
    },
    {
      path: '/DataGridType2View',
      name: 'DataGridType2View',
      component: DataGridType2View
    },
    {
      path: '/DataGridType3View',
      name: 'DataGridType3View',
      component: DataGridType3View
    },
    {
      path: '/Editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/LoadingBar',
      name: 'LoadingBar',
      component: LoadingBar
    },
    {
      path: '/AlertModal',
      name: 'AlertModal',
      component: AlertModal
    },
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart
    },
  ]
})

export default router
