import Vue from 'vue'
import Router from 'vue-router'

const lazyLoadingLayout = (name) => () => import(`@/components/layouts/${name}.vue`)
const lazyLoading = (name) => () => import(`@/views/${name}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: lazyLoadingLayout('Auth'),
    //   children: [
    //     {
    //       path: 'login',
    //       name: 'Login',
    //       component: lazyLoading('auth/Login')
    //     },
    //     {
    //       path: 'register',
    //       name: 'Register',
    //       component: lazyLoading('auth/Register')
    //     }
    //   ]
    // },
    {
      path: '/',
      component: lazyLoadingLayout('Default'),
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: lazyLoading('Dashboard')
        },
        {
          path: '/products',
          name: 'Products',
          component: lazyLoading('Products')
        },
        {
          path: '/rooms',
          name: 'Rooms',
          component: lazyLoading('Rooms')
        }
      ]
    }
  ]
})
