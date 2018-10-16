import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/homeRouter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:()=>import('../views/home.vue')
        },
        {
          path:'/notice',
          name:'notice',
          component:()=>import('../views/notice.vue')
        },
        {
          path:'/personal',
          name:'personal',
          component:()=>import('../views/personal')
        }
      ]
    },
    {
      path: '/login',
      name:'login',
      component:()=>import('../views/login.vue')
    },
    {
      path:'/organiztionlife',
      name:'organiztionlife',
      component:()=>import('../views/organiztionLife.vue')
    },
    {
      path:'/newedital',
      name:'newedital',
      component:()=>import('../views/massageEdital.vue')
    },
    {
      path:'/test',
      name:'test',
      meta:{
        title:'123'
      },
      component:()=>import('../views/test.vue')
    }
  ]
})
