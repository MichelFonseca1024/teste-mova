const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/country/:alpha2Code',
    name: 'Country',
    component: () => import('../views/Country.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue')
  }
]

export default routes
