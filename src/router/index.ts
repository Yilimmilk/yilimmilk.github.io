import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/pages/index.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/components/ExternalRedirect.vue'),
      meta: { url: 'http://blog.mapotofu.cn' },
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('@/components/ExternalRedirect.vue'),
      meta: { url: 'http://cloud.mapotofu.cn' },
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/components/ExternalRedirect.vue'),
      meta: { url: 'http://chat.mapotofu.cn' },
    },
    {
      path: '/projects',
      name: 'projects',
      children: [
        {
          path: 'leshouyi',
          name: 'leShouYi',
          component: () => import('@/pages/projects/LeShouYi.vue'),
        },
        {
          path: 'onlinejudge',
          name: 'onlineJudge',
          component: () => import('@/pages/projects/OnlineJudge.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/404.vue') },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
