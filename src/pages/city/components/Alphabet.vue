<template>
  <ul class="list" >
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="keyClick"
    >
      {{item}}</li>
  </ul>
</template>

<script>
  /*
   * 问题1：在定义侧边导航栏手指滑动时，handleTouchMove都会执行一次,也就每次都计算一次offsetTop,这样页面JS性能会大大降低
   * 优化：初始化data中startY值,使用updated钩子对offsetTop进行计算，在更新页面时就成功缓存完ABC...的值,这样就不需要每次都从A开始进行跳转到滑动目标进行计算
   * 问题2：对handleTouchMove进行节流,不让其跟随字母滑动来短频率跳动加载页面负荷
   * 优化：在return引用timer:null,使用setTimeout延迟函数16ms进行滑动来执行数据,当16ms之后出现数据变更就赋值给timer,清理上次操作重新加载,达到减少handleTouchMove的执行次数,提高页面性能
   */
    export default {
        name: "CityAlphabet",
      props:{
        cities : Object
      },
      data(){
        return {
          touchStatus:false,
          startY:0,
          timer:null
        }
      },
      updated(){
        this.startY = this.$refs['A'][0].offsetTop
      },
      computed:{
        letters(){
          const letters = [];
          for (let i in this.cities){
            letters.push(i)
          }
          return letters
        }
      },
      methods:{
        keyClick(x){
          this.$emit('change',x.target.innerText)
        },
        handleTouchStart(){
          this.touchStatus=true
        },
        handleTouchMove(e){
          if(this.touchStatus){
            if(this.timer){
              clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
              const startY = this.$refs['A'][0].offsetTop;
              const touchY = e.touches[0].clientY - 79;
              const index = Math.floor((touchY - this.startY)/20);
              if(index >=0 && index < this.letters.length)
                this.$emit('change',this.letters[index])
            },16);
          }
        },
        handleTouchEnd(){
          this.touchStatus=false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  /*
   * 思路1：使用ajax模拟后端数据传递步骤
   * 优化：在子组件City中使用ajax可减少子组件单个去引用的繁琐,增加了页面性能和代码量,这也是组件式开发带来的好处
   * 步骤1：在子组件导入axios,在js模块中使用mounted监听页面挂载引入通道函数
   * 步骤2：定义通道函数>>启用接受ajax数据通道来获取数据,"axios.get("虚拟数据的路径")"此时为打开通道,用".then("获取数据的函数")"返回接受函数
   * 步骤3：定义接受函数>>接受一个数据res,使用"res=res.data"来抓取数据,data为json文件里最外围的数据抓取包,其次使用一个if判断res.ret和res.data是否同意请求和请求后是否有值来进行数据的传递(PS：这里的ret是模拟后端请求成功)
   * 步骤4：在子组件定义return需要传递的参数值，在获取函数中传递对应函数"this.参数值 = res.data.json内的参数值"
   * 步骤5：然后子组件父组件进行参数传递，就在对应父组件中"：return的参数=return参数",最后在对应父组件内使用props接受数值,最后使用到对应对的div中
   * 思路2：兄弟组件传值逻辑，实现导航字母列表跳转对应字母的列表项
   * 步骤1：发起数据的组件1使用点击事件，定义事件函数使用"this.$emit('change',数据)"对外传递,然后City组件进行接收
   * 步骤2：在City组件中在组件1使用监听"@change='接收函数'"，定义该函数接收一个对象"this.数据名 = 数据名自拟",将其打包为一个参数，在data中return这个空值参数
   * 步骤3：在需要接收数据的组件2，中接受该参数":参数 = 参数"，到组件2中props接收该参数，在对应的div中使用dom操作函数":ref='key'"，当change监听到数据变化时，使用watch进行监听
   * 步骤4：在组件2中使用监听watch:{参数(){if(this.参数){功能区}}}这样才能实现数据变化时触发功能区代码
   * 步骤5:功能区中使用scroll.scrollToElement(element)滚动跳转函数接收一个参数
参数为全局dom"this.$ref"获取这个组件1的点击数组[this.letter]，然后[0]获取这个字符实现功能
   */
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
