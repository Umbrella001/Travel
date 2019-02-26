<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showJudge">
      <swiper-slide
        v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" :alt="item.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "HomeSwiper",
      props:{
        swiperList : Array
      },
      data(){
        return{
          swiperOption : {
            notNextTick:true,//第一时间获取swiper对象
            autoplay:2500,//轮播时间ms
            autoplayDisbleOnInteraction:true,//和loop结合实现无缝轮播
            loop:true,//轮播图滑动循环开关loop
            direction: 'horizontal',//垂直轮播为vertical
            paginationType:'bullets',//分页类型：bullets圆点、fraction分页、progress进度条、custom自定义
            paginationClickable:true,//点击分页器按钮时会自动跳转
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            pagination:'.swiper-pagination',//分页区域加载，只有导入才能对其加载样式
            prevButton:'.swiper-button-prev',//分页按钮(点亮)
            nextButton:'.swiper-button-next'//分页按钮(未点亮)
          },
        }
      },
      computed :{
        showJudge(){
          return this.swiperList.length
        }
      }
    }
</script>

<style lang="stylus" scoped>
  /*
   * 问题1：加载图片时的跳动问题（布局问题）
   * 错误点：当没有外层wrapper对轮播图swiper的定位样式，网络问题用户使用时就会出现内容跳动的不良体验
   * 解决：同上加上wrapper对swiper进行样式设定,使用高宽比对图片大小比例的计算， 使用padding-bottom:比例，定义一个固定值就是width:100%,而高度为待定的0，overflow:hidden的属性达成图片加载根据比例计算出的高度进行展示加载
   * 问题2：如何突破scoped限制定义其他组件的元素？
   * 原因：scoped定义的样式，只能对当前组件进行设定，不会影响其他组件，而swiper并不是该组件内的元素，所以定义其内部的样式是无用的
   * 解决：在组件的最外层class进行">>>"穿透到其他组件指定元素即可
   * 疑点：如控制轮播图下面的滑动点并没有显示在该组件外层，如何获取？
   * 解决：在浏览器使用检查代码中的选择器，对页面上对应区域点击，即可获取该区域的Elements信息
   * 问题3：使用ajax对Home父子组件传值时,出现加载页面时轮播图为最后一张首先显示
   * 原因：ajax传值时第一次是空数组，由于swiper是动态的随着数据的引入而创建,所以第一次传递数组时便是空数组,导致真正数据即第一章轮播图会出现在第二次创建的swiper
   * 解决：根据原因，我们可以在swiper中做一个判断v-if，如果进入的数据为空时并不生成一次循环,空数组length为0，v-if为false
   */
.wrapper >>>  .swiper-pagination-bullet-active
  background : #62dd21
.wrapper
  overflow :hidden
  width : 100%
  height : 0
  padding-bottom :37.08%
  background : url("~styles/image/loading.gif")no-repeat center center
.swiper-image
  width : 100%
</style>
