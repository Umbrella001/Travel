<template>
<div class="search">
  <input class="search-input" type="text" placeholder="输入城市名或拼音">
</div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>
s
<style lang="stylus" scoped>
  @import "~styles/variable.styl"
.search
  height : 36px
  background :$bgColor
  padding :0 10px
.search-input
  width :100%
  height :30px
  line-height:30px
  padding :0 8px
  border-radius : 3px
  color : $textColor
  text-align :center
  box-sizing :border-box
</style>
