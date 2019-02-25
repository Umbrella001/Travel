<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" :alt="item.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
      name: "HomeSwiper",
      data(){
        return{
          swiperOption : {
            pagination:'.swiper-pagination',
            /*轮播图滑动循环开关loop*/
            loop:true
          },
          swiperList:[
            {
              id : '001',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1511/74/09399809dee2c9f7.jpg_890x330_7c21d294.jpg',
              alt : '连州地下河'
          },{
              id : '002',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/fb/de32080b7db0fe02.jpg_890x330_0c79691b.jpg',
              alt : '七星岩'
            },{
              id : '003',
              imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/1c/3e5cd4c5f2ad2002.jpg_890x330_e0568d4d.jpg',
              alt : '湟川三峡'
            },{
              id : '004',
              imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/25d66465f9f0f27f99b3fe43307c7a79.jpg_890x330_39629863.jpg',
              alt : '深圳欢乐谷'
            }
          ]
        }
      },
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
