<template>
  <div>
<div class="search">
  <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
</div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item" v-for="item of list" :key="item.id">
      {{item.name}}
      </li>
      <li class="search-noItem" v-show="listNoItem"><img class="search-sad" src="~styles/image/Sad.png" alt="">没有找到匹配的城市</li>
    </ul>
  </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "CitySearch",
      props:{
        cities : Object
      },
      data(){
        return{
          keyword : '',
          list : [],
          timer:null
        }
      },
      watch : {
          keyword(){
              if(this.timer){
                clearTimeout(this.timer)
              }
              if(!this.keyword){
                this.list=[];
                return
              }
              this.timer = setTimeout(() => {
                const result = [];
                for (let i in this.cities){
                  this.cities[i].forEach((value) =>{
                    if(value.spell.indexOf(this.keyword) > -1 ||
                    value.name.indexOf(this.keyword) > -1){
                      result.push(value)
                    }
                  })
                } //使用循环重新遍历数组ABC...在使用箭头函数复用于If判断将重新遍历的value对应的给result,最后赋值给list
                this.list = result
              },100)
            }
          },
      mounted() {
          this.scroll = new BScroll(this.$refs.search)
      },
      computed:{
          listNoItem(){
            return !this.list.length
          }
      }

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
.search-content
  z-index :99
  position :absolute
  overflow :hidden
  top: 78px
  right :0
  left :0
  bottom:0
  background :#eee
.search-item
  line-height : 32px
  padding-left : 12px
  color : #555
  background : #fff
  border-bottom : 1px solid #eee
.search-item:hover
  cursor :pointer
  color : #111111
  background : #a3e1ff
.search-noItem
  line-height : 32px
  padding-left : 12px
  font-size :16px
  color : #555
  background : #fff
  text-align :center
.search-sad
  padding : 0 2px 4px 0
</style>
