<template>
  <div>
<div class="search">
  <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
</div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
      >
      {{item.name}}
      </li>
      <li class="search-noItem" v-show="listNoItem"><img class="search-sad" src="~styles/image/Sad.png" alt="">没有找到匹配的城市</li>
    </ul>
  </div>
  </div>
</template>

<script>
  /*
   * 思路：搜索栏对数据进行检索（虚拟数据）
   * 步骤1：对search组件传递cities数据,在该组件中接受cities值，然后建立搜索内容显示区,一般和搜索栏拼接,添加DIY样式,内层div则为数据区,在该区域进行循环
   * 步骤2：return两个值一个为检索值keyword并在搜索栏input中添加双向绑定v-model，和新条件数组list都为空
   * 步骤3：一般通过父子组件改变的数值都可以用watch对其进行监听,重组cities的数据为value占存,在让重组的value匹配虚拟数据的检索项用indexOf识别用户输入的keyword，由于判断语句较长我们定义一个result来添加符合的value项,借宿收集之后，将这些数据用数组list进行输出
   * 步骤4：最后循环体的循环该list,并item对应的名字
   * 问题：对于这种数据经常从虚拟json库中进行传递,在频繁的检索中，势必带来性能的下降
   * 优化:针对这类型问题，我们都可以在数据交接处的代码添加setTimeout对其进行节流
   * 步骤1：在data定义一个次数timer为null
   * 步骤2：定义一个清除数据的判断clearTimeout,节流代码区>>外套setTimeout定义不影响视觉体验的ms,完成节流
   * 问题：出现检索栏项目不能滚动问题
   * 原因：由于该部分使用了position+hidden的预防移动端加载溺出样式,才会固定
   * 解决：即在循环div的外包div(也是固定样式的div)添加一个dom操作ref='自拟',在js模块引用BS,并使用挂载钩子mounted"this.scroll = new BScroll(this.$refs.自拟名)"来对该div引用BS
   */
  import BScroll from 'better-scroll'
  import {mapActions} from 'vuex'
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
      methods:{
        handleCityClick(city){
          this.selectCity(city);
          this.$router.push('/')
        },
        ...mapActions(['selectCity'])
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
