<template>
  <div>
    <div class="title">
      <img class="title-travel" src="../../../assets/styles/image/travel.png" alt=""><span class="title-text">周末去哪玩</span>
    </div>
    <ul>
      <li class="place border-bottom"
          v-for="item of recommendList"
          :key="item.id">
        <div class="place-wrapper">
        <img class="place-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="place-info">
          <p class="place-title">{{item.title}}</p>
          <p class="place-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "HomeWeekend",
    data: function () {
      return{
        recommendList:[
          {
            id:'001',
            imgUrl:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
            title:'清远周边逛',
            desc:'人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
          },{
            id:'002',
            imgUrl:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
            title:'浮在海上的绿洲',
            desc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
          },{
            id:'003',
            imgUrl:'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
            title:'粤西温泉',
            desc:'"自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
          },{
            id:'004',
            imgUrl:'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
            title:'广州必打卡',
            desc:'感受现代与传统相融合的广州',
          }
        ]
      }
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
    margin-top : 1px
  .title-travel
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
  .place-wrapper
    overflow :hidden
    height :0
    padding-bottom : 33.44%
  .place-img
    width :100%
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
  .place-details
    float:right
    margin :10px 16px 0 0
    width :80px
    color : #1a1a1a
    background :#ff9300
    border-radius : 5px
</style>
