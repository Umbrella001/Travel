<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" key="index">
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
      data : function () {
          return {
            swiperOption : {
              pagination:'.swiper-pagination',
              /*轮播图滑动循环开关loop*/
              loop:false
            },
            iconList:[
              {
                id:'01',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                iconName:'热门景点'
            },{
                id:'02',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
                iconName:'自然风光'

            },{
                id:'03',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                iconName:'游乐场'
            },{
                id:'04',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                iconName:'海洋馆'
            },{
                id:'05',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                iconName:'泡温泉'
            }, {
                id:'06',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
                iconName:'冰雪季'
              },{
                id:'07',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                iconName:'动植物园'

              },{
                id:'08',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                iconName:'玩转长隆'
              },{
                id:'09',
                iconUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                iconName:'一日游'
              },{
                id: '10',
                iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/b34a13fd372f5ce8cb2c954ffe25622d.png',
                iconName: '周边游'
              }
            ]
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
.icons >>> .swiper-pagination
  display :none
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
