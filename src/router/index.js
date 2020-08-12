import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/base/button',
      name: 'button',
      component: () => import('@/views/base-view/button')
    },
    {
      path: '/base/cell',
      name: 'button',
      component: () => import('@/views/base-view/cell')
    },
    {
      path: '/base/navigation',
      name: 'navigation',
      component: () => import('@/views/base-view/navigation')
    },
    {
      path: '/base/icon',
      name: 'icon',
      component: () => import('@/views/base-view/icon')
    },
    {
      path: '/base/tabbar',
      name: 'tabbar',
      component: () => import('@/views/base-view/tabbar')
    },
    {
      path: '/base/popup',
      name: 'popup',
      component: () => import('@/views/base-view/popup')
    },
    {
      path: '/base/tag',
      name: 'tag',
      component: () => import('@/views/base-view/tag')
    },
    {
      path: '/senior/field',
      name: 'field',
      component: () => import('@/views/senior-view/field')
    },
    {
      path: '/senior/stepper',
      name: 'stepper',
      component: () => import('@/views/senior-view/stepper')
    },
    {
      path: '/senior/pullRefresh',
      name: 'pullRefresh',
      component: () => import('@/views/senior-view/pull-refresh')
    },
    {
      path: '/senior/loading',
      name: 'loading',
      component: () => import('@/views/senior-view/loading')
    },
    {
      path: '/senior/radio',
      name: 'radio',
      component: () => import('@/views/senior-view/radio')
    },
    {
      path: '/senior/loadMore',
      name: 'loadMore',
      component: () => import('@/views/senior-view/load-more')
    },
    {
      path: '/senior/swipe',
      name: 'swipe',
      component: () => import('@/views/senior-view/swipe')
    },
    {
      path: '/senior/tab',
      name: 'tab',
      component: () => import('@/views/senior-view/tab')
    },
    {
      path: '/profession/toTop',
      name: 'tab',
      component: () => import('@/views/profession-view/to-top')
    },
    {
      path: '*',
      name: 'index',
      component: () => import('@/views/index')
    }
  ]
})
