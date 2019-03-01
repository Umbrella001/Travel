<template>
<div class="header" @scroll="scrollMove">
  <router-link tag="div" to="/" class="round" v-show="showHeader">
    <div class="iconfont round-return">&#xe617;</div>
  </router-link>
  <div class="header-column" v-show="!showHeader" :style="opacityDegree">
    <router-link tag="div" to="/" class="iconfont header-column-return">&#xe617;</router-link>
    景点详情
  </div>
</div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data(){
          return{
            showHeader:true,
            opacityDegree : {
              opacity : 0
            }
          }
        },
      activated(){
          window.addEventListener('scroll',this.scrollMove)
      },
      deactivated(){
        window.removeEventListener('scroll',this.scrollMove)
      },
      methods:{
        scrollMove(){
          const top = document.documentElement.scrollTop;
          var opacity = top / 150 ;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityDegree = { opacity };
          this.showHeader = top <= 50;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  /*
   * 功能：实现冻结栏随着scroll的移动距离出现渐隐渐现的效果
   * 思路1：定义对象的v-show事件进行两个状态的管理
   * 思路2：定义mounted/activated（注意activated并不是vue里的，而是vuex中keep-alive内新增的钩子）来监听scroll的事件，在事件中函数中读取滚动距离值
   * 监听scroll>>> 钩子中使用window.addEventListener对scroll添加一个监听事件,调用事件的函数
   * 获取scroll滚动值实现展示效果>>>定义一个const函数占存参数top存储为document.documentElement.scrollTop这个滚动值，使用判断进行v-show的展示
   * 获取scroll滚动值实现渐现效果>>>使用var/let非函数占存参数opacity,并三元固定正确的opacity值区间,最后将opacity对象传给（:style="参数"）参数
   * 结束scroll值获取的全局window>>>使用window.removeEventListener解除window的全局绑定其他页面scroll读值的影响
   */
  @import "~styles/variable.styl"
.round
  position absolute
  top 10px
  left 10px
  width 36px
  height 36px
  line-height 36px
  text-align center
  border-radius 50%
  background rgba(0,0,0,.8)
.round-return
  color white
  margin-right 2px
.header-column
//冻结栏的制作position fixed
  position  fixed
  top 0
  left 0
  right 0
  font-size 16px
  height $headerHeight
  line-height $headerHeight
  color #ffffff
  background $bgColor
  text-align center
.header-column-return
  position absolute
  top 0
  left 0
  width 32px
  font-size 20px
  margin-left 2px
</style>
