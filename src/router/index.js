import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: () => import('../views/Editor.vue')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../views/PreView.vue')
    },
    {
      path: '/LoadingBar',
      name: 'LoadingBar',
      component: () => import('../views/LoadingBar.vue')
    },
    {
      path: '/AlertModal',
      name: 'AlertModal',
      component: () => import('../views/AlertModal.vue')
    },
    {
      path: '/Chart',
      name: 'Chart',
      component: () => import('../views/Chart.vue')
    },
  ]
});

export default router;
