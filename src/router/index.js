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
      meta: {
        title: ''
      },
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
      path:'/newsfile',
      name:'newsfile',
      component:()=>import('../views/newDetail.vue')
    },
    {
      path:'/everpicture',
      name:'everpicture',
      component:()=>import('../views/everPicture.vue')
    },
    {
      path:'/cloudinteractive',
      name:'cloudinteractive',
      component:()=>import('../views/cloudInteractive.vue')
    },
    {
      path:'/usermassage',
      naem:'usermassage',
      component:()=>import('../views/user/usermassage.vue')
    },
    {
      path:'/activedetail',
      name:'activedetail',
      component:()=>import('../views/activedetail.vue')
    },
    {
      path:'/integral', 
      name:'integral',
      component:()=>import('../views/user/userintegral.vue')
    },
    {
      path:'/organiztionfound',
      name:'organiztionfound',
      component:()=>import('../views/foundOrganiztion.vue')
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
