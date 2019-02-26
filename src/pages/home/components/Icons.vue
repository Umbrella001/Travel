<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon-box" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-position" :src="item.iconUrl" :alt="item.iconUrl">
      </div>
      <p class="icon-name">{{item.iconName}}</p>
    </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
      props:{
        iconList : Array
      },
      data : function () {
          return {
            swiperOption:{
              autoplayDisbleOnInteraction:false,//和loop结合实现无缝轮播
              loop:false,//轮播图滑动循环开关loop
              // autoplay:false 或者直接使用autoplay
            },
          }
      },
      /*使用computed函数计算多数组的页数*/
      computed : {
          pages(){
            const pages = [];
            this.iconList.forEach((item,index) => {
              const page = Math.floor(index/8);
              if(!pages[page]){
                pages[page] = []
              }
              pages[page].push(item)
            });
            return pages
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  @import "~styles/mixins.styl"
  /*
   * 问题1：icons区域使用vue-awesome-swiper轮播插件时无法分页滚动
   * 解决：第一在icons循环体中外包"swiper :op..."和"swiper-slide"如果需要轮播点则再加上wiper-pagination，并且在data中定义pagination；第二使用computed计算循环体中数组的数量进行页数的计算；第三在swiper-slide循环页数，循环体中更改之前的参数，统一改成page
   * 优化：使用封装CSS中特殊样式为全局styl函数，提高代码复用性和维护性
   */
.icons >>> .swiper-container
  height :0
  padding-bottom : 50%
.icon-box
  position :relative
  overflow :hidden
  float:left
  width :25%
  height :0
  padding-bottom :25%
  box-shadow :inset 0 0 1px 0 rgba(66, 66, 66,.2)
.icon-img
  position :absolute
  overflow :hidden
  top:0
  bottom:.44rem
  left :0
  right :0
  /*控制icon大小直接控制padding值就行*/
  padding : .12rem
  box-sizing :border-box
.icon-position
  display :block
  height :100%
  margin :0 auto
.icon-name
  position :absolute
  left :0
  right :0
  bottom : .18rem
  height :.34rem
  line-height :0.34rem
  color :$textColor
  font-size :.3rem
  text-align :center
  text-shadow: 0 .2px .05px rgba(0,0,0,.1)
  ellipsis()
</style>
