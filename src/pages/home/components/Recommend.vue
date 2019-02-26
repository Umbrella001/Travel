<template>
    <div>
      <div class="title">
        <img class="title-hot" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt=""><span class="title-text">本周热门榜单</span>
        <a class="title-right" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=广州">全部榜单 <img class="title-arrow" src="../../../assets/styles/image/arrow-right.png" alt=""></a>
      </div>
        <ul>
          <li class="place border-bottom"
              v-for="item of recommendList"
              :key="item.id">
            <img class="place-img" :src="item.imgUrl" :alt="item.title">
            <div class="place-info">
              <p class="place-title">{{item.title}}</p>
              <p class="place-desc">{{item.desc}}</p>
              <p class="money">￥</p>
              <p class="place-money">{{item.money}}</p>
              <p class="place-qi">起</p>
              <button class="place-details">查看详情</button>
            </div>
          </li>
        </ul>
      </div>

</template>

<script>
    export default {
        name: "HomeRecommend",
      data: function () {
        return{
          recommendList:[
            {
              id:'001',
              imgUrl:'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_250x250_86778c54.jpg',
              title:'长隆野生动物园',
              desc:'隶属全国首批国家级5A旅游景区长隆旅游度假区',
              money:258
          },{
              id:'002',
              imgUrl:'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_250x250_2e9029da.jpg',
              title:'长隆国际大马戏剧院',
              desc:'长隆国际大马戏位于全国AAAAA景区广州长隆旅游度假区，拥有全球首创实景式马戏舞台，数千万巨资打造极致奢华的尖端舞美科技',
              money:229
          },{
              id:'003',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_200x200_d3b1427c.jpg',
              title:'长隆欢乐世界',
              desc:'"全球过山车之王"垂直过山车等你来玩',
              money:178.9
          },{
              id:'004',
              imgUrl:'http://img1.qunarzz.com/sight/p0/1410/20/41d723daadc98045fe6b7283ba0af40c.jpg_200x200_5a05d5bc.jpg',
              title:'碧水湾温泉度假村',
              desc:'养生度假等功能于一体的综合性五星标准温泉度假村',
              money:95
          },{
              id:'005',
              imgUrl:'http://img1.qunarzz.com/sight/p0/201403/07/1faf03354267996c8b039aa15290377b.jpg_200x200_7d3389d4.jpg',
              title:'天适樱花悠乐园',
              desc:'体验漂游岛屿的慢生活和悠生活，感受自然万物的空灵之美',
              money:48
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
