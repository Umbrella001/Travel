import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import City from '@/pages/city/city.vue'
import Detail from '@/pages/detail/Detail.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
  //解决页面切换时不会自动回到顶部的重要滚动行为（路由切换时，所以写在router逻辑中）
  scrollBehavior (to,from,savePosition) {
    return {x: 0,y:0}
  }
})










