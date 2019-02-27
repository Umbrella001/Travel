<template>
  <div>
    <div class="title">
      <img class="title-travel" src="~styles/image/travel.png" alt=""><span class="title-text">周末去哪玩</span>
    </div>
    <ul>
      <li class="place border-bottom"
          v-for="item of weekendList"
          :key="item.id">
        <div class="place-wrapper border-bottom">
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
    props:{
      weekendList : Array
    },
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
    padding-bottom : 36%
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
