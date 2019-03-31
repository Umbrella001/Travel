<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'
  /*
   * 性能问题：对于前端请求后端数据，页面获取到ajax数据通过路由展现时，每次跳转相同页面都需要发送ajax数据的请求,没必要的请求就加重了页面的性能
   * 优化1：使用Vue提供的keep-alive标签，将标签套在router路由App入口的router-view中.此时该路由被加载一次之后keep-alive就会把数据放在内存之中,这样之后关联到ajax的请求，也刚好解决了请求次数的性能问题
   * 优化问题：执行上操作后,逻辑层是错误的,因为当我们更改数据时，数据还是第一次加载的数据源,所以需要完善当数据更改时重新加载ajax
   * 分析：分析在Home部分父组件有ajax请求，所以定义总件Home即可控制各个组件,其次Home发送请求函数在mounted中，只要控制这个挂载钩子就可以控制请求的ajax是否发起
   * 解决：在Home组件定义一个暂存参数lastCity作为中转,在页面挂载时将用户点击的城市传给暂存参数,因为使用了vuex.Store仓库所以参数要按照vuex的规则输出，重要>>使用keep-alive新增activated钩子对用户点击的city和mounted暂存city进行判断,如果不同则发送ajax请求,更严谨的需要在json的请求数据中< '/api/index.json?city=' + this.city > ,所以在activated中让新点击的city付给暂存的lastCity实现页面中XHR中对应json的城市匹配
   */
    export default {
      name: "Home",
      components : {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
      },
      data(){
        return{
          swiperList:[],
          iconList:[],
          recommendList:[],
          weekendList:[],
          lastCity:''
        }
      },
      computed : {
        ...mapState(['city'])
      },
      mounted (){
        this.lastCity = this.city;
        this.getHomeInfo()
      },
      activated(){
        if(this.lastCity !== this.city){
          this.lastCity = this.city;
          this.getHomeInfo()
        }
      },
      methods :{
        getHomeInfo(){
          axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoMsg)
        },
        getHomeInfoMsg (res){
          res = res.data;
          /*判断后端正确返回res并且有值*/
          if(res.ret && res.data){
            const data = res.data;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          }
        }
      }
    }
</script>

<style scoped>

</style>
