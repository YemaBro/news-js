import Vue from 'vue'
import Router from 'vue-router'
// import News from './views/Home.vue'
const _import = file => () => import('@/views/' + file + '.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import('Home')
    },
    {
      path: '/detail',
      name: 'detail',
      component: _import('detail')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
