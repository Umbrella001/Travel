<template>
<div class="list" ref="wrapper">
  <div>
  <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="button-list">
    <div class="button-box">
      <div class="button-text">广州</div>
    </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-box" v-for="item of hotCities" :key="item.id">
      <div class="button-text">{{item.name}}</div>
      </div>
    </div>
  </div>
  <div class="area"
       v-for="(item,key) of cities"
       :key="key"
       :ref="key"
  >
    <div class="title border-topbottom">
      {{key}}
    </div>
    <div class="item-list">
      <div class="item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
        name: "CityList",
      props:{
        cities : Object,
        hotCities : Array,
        letter : String
      },
      mounted() {
          this.scroll = new Bscroll(this.$refs.wrapper)
      },
      watch :{
          letter(){
             if(this.letter){
               const element = this.$refs[this.letter][0];
               this.scroll.scrollToElement(element)
             }
          }
      }
    }
</script>

<style lang="stylus" scoped>
  @import "~styles/variable.styl"
  /*
   * 问题：解决滚动List中常见的滚动时外层list不自动扩充content内容区高度问题
   * 解决1：将当前外层list包裹的内容固定处理，在外层添加样式：使用absolution绝对定位好原先的布局结构，再使用hidden不显示不包裹的内容 === 此时页面动不了说明达到效果了
   * 解决2：用npm安装better-scroll插件,首先需要用到的页面导入BS,然后在外层list引入一个ref='名字',其次使用mounted监听挂载页面，最后在mounted内部获取列表
   * 报错点：引用BS时页面仍然无法滚动
   * 解决：注意BS插件的对象要求，最外层假设为wrapper，内层就是很多列表，这些列表就应该统一被一个content的div包裹,即可解决
   */
.border-topbottom
&:before
  border-color : #d7d7d7
&:after
  border-color : #d7d7d7
.list
  position :absolute
  overflow :hidden
  top: 78px
  right:0
  bottom :0
  left:0
.title
  height : 22px
  line-height :22px
  padding-left :10px
  font-size : 14px
  background : #eee
  color : #666
.button-list
  overflow :hidden
  padding : 5px 30px 5px 5px
.button-box
  float :left
  width :33.33%
.button-text
  margin : 4px
  padding : 4px 0
  border : 1px solid #ccc
  border-radius :3px
  text-align :center
.item
  height : 36px
  line-height :36px
  padding-left :12px
  border-bottom : 1px solid #eee
</style>
