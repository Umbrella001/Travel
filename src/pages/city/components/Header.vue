<template>
    <div class="header">
      <router-link to="/">
      <div class="iconfont header-back">&#xe617;</div>
      </router-link>
      城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
.header
  position :relative
  overflow :hidden
  height :$headerHeight
  line-height :$headerHeight
  color :#ffffff
  background :$bgColor
  font-size : 16px
  letter-spacing :.5px
  text-align :center
.header-back
  position :absolute
  width :32px
  top:0
  bottom :0
  left : 2px
  font-size : 20px
  color :#fff
</style>
