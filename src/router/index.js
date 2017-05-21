
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login/Login' //登陆模块
import Register from '@/components/page/register/Register' //注册模块
import Index from '@/components/page/Index'  //index 首页

import NotFoundComponent from '@/components/page/NotFoundComponent' //404页面

import MTt from '@/components/page/myTimetable/MyTimetable' 

import SmallSchool from '@/components/page/smallSchool/SmallSchool' // 微校模块
import SchoolDetail from '@/components/page/smallSchool/SchoolDetail' //学校详情页模块
import NewsInformation from '@/components/page/smallSchool/NewsInformation' //学校新闻详情页

import ExquisiteList from '@/components/page/exquisiteClassroom/ExquisiteList' //精品课堂模块
import CoursePlayback from '@/components/page/exquisiteClassroom/CoursePlayback' //精品课堂课程回放详情页
import RecordingPlayback from '@/components/page/exquisiteClassroom/RecordingPlayback' //精品课堂播放界面


Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      console.log(100)
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    console.log(position)
    return position
  }
}


export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    { path: '*', component: NotFoundComponent },

    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
    {
      path: '/myTimetable',
      name: 'MTt',
      component: MTt
    },

    {
      path: '/smallSchool',
      name: 'smallSchool',
      component: SmallSchool,
      meta: { scrollToTop: true } 
      
    },
    { path: '/schoolDetail/:id',
      name:'schoolDetail',
      component: SchoolDetail,
      meta: { scrollToTop: true } 
    },
    { path: '/newsInformation/:id',
      name:'newsInformation',
      component:NewsInformation
     
    },
     {
      path: '/exquisiteList',
      name: 'exquisiteList',
      component: ExquisiteList
      
    },
    {
      path: '/coursePlayback/:id',
      name: 'coursePlayback',
      component: CoursePlayback
      
    },

    { path: '/recordingPlayback/:id',
      name:'recordingPlayback',
      component: RecordingPlayback
    }


  ]
})

