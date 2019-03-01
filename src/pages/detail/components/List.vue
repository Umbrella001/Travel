<template>
    <div>
      <div class="title-column"
           v-for="(item,index) of list"
           :key="index"
      >
        <div class="item-title">
          <span class="title-icon"></span>
          {{item.title}}
          <div class="title-info">
            <div class="title-left">
              <p class="title-left-text"></p>
              <p class="title-left-desc"></p>
            </div>
            <div class="title-right"></div>
          </div>
        </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
      props:{
          list : Array
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
.item-title
  width 375px
  height 30px
  line-height 30px
  padding 0 8px
  font-size 16px
.title-icon
  position relative
  display: inline-block
  width: .36rem
  height: .36rem
  top: .1rem
  left: .16rem
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  margin-right: .1rem
  background-size: .4rem 3rem
.item-children
  padding 0 16px
</style>
