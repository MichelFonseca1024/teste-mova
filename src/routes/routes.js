const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/teste',
    name: 'Teste',
    component: () => import('../views/teste2.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue')
  }
]

export default routes
