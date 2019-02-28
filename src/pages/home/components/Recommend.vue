<template>
    <div>
      <div class="title">
        <img class="title-hot" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt=""><span class="title-text">本周热门榜单</span>
        <a class="title-right" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=广州">全部榜单 <img class="title-arrow" src="../../../assets/styles/image/arrow-right.png" alt=""></a>
      </div>
        <ul>
          <router-link
              tag="li"
              class="place border-bottom"
              v-for="item of recommendList"
              :key="item.id"
              :to=" '/detail/' + item.title"
          >
            <img class="place-img" :src="item.imgUrl" :alt="item.title">
            <div class="place-info">
              <p class="place-title">{{item.title}}</p>
              <p class="place-desc">{{item.desc}}</p>
              <p class="money">￥</p>
              <p class="place-money">{{item.money}}</p>
              <p class="place-qi">起</p>
              <button class="place-details">查看详情</button>
            </div>
          </router-link>
        </ul>
      </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
      props:{
        recommendList : Array
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
   position :relative
   height : 50px
   line-height :50px
   border-bottom : .5px solid #eaeaea
   border-top : .5px solid #eaeaea
   margin-top : 1px
  .title-hot
   position :absolute
   overflow :hidden
   width :40px
   height :40px
   top :4px
   bottom: 0
   left:-4px
   padding :8px
   box-sizing :border-box
  .title-text
   position :absolute
   font-size:22px
   top:0
   bottom :0
   left :30px
  .title-right
   position :absolute
   top:2px
   bottom :0
   right :12px
   font-size :16px
   color : #b2b2b2
  .title-arrow
   opacity :.5
   padding-bottom :2px
  .place
    overflow :hidden
    display :flex
    height : 95px
  .place-img
    width:85px
    height :85px
    padding :5px
  .place-info
    flex :1
    padding : 5px
    min-width :0
  .place-title
    font-size : 18px
    line-height :27px
    color :#000
    ellipsis()
  .place-desc
    font-size :12px
    line-height :20px
    color : #8e8e8e
    ellipsis()
  .money
    display :inline-block
    font-size :16px
    color :#FF8300
  .place-money
    display :inline-block
    margin: 4px 0 0 -4px
    font-size :28px
    font-family :'宋体'
    color :#FF8300
  .place-qi
    display :inline-block
    font-size :14px
  .place-details
    float:right
    margin :10px 16px 0 0
    width :80px
    color : #3b3b3b
    background :#ff9300
    border-radius : 5px
</style>
