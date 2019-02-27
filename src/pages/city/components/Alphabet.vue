<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
    <li class="item">H</li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet"
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
.list
  display :flex
  flex-direction :column
  justify-content :center
  position: absolute
  top : 78px
  right :0
  bottom : 0
  width : 20px
.item
  line-height : 20px
  text-align :center
  color :$bgColor
</style>
