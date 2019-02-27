<template>
  <ul class="list" >
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
      props:{
        cities : Object
      }
    }
</script>

<style lang="stylus" scoped>
  /*
   * 思路：使用ajax模拟后端数据传递步骤
   * 优化：在子组件City中使用ajax可减少子组件单个去引用的繁琐,增加了页面性能和代码量,这也是组件式开发带来的好处
   * 步骤1：在子组件导入axios,在js模块中使用mounted监听页面挂载引入通道函数
   * 步骤2：定义通道函数>>启用接受ajax数据通道来获取数据,"axios.get("虚拟数据的路径")"此时为打开通道,用".then("获取数据的函数")"返回接受函数
   * 步骤3：定义接受函数>>接受一个数据res,使用"res=res.data"来抓取数据,data为json文件里最外围的数据抓取包,其次使用一个if判断res.ret和res.data是否同意请求和请求后是否有值来进行数据的传递(PS：这里的ret是模拟后端请求成功)
   * 步骤4：在子组件定义return需要传递的参数值，在获取函数中传递对应函数"this.参数值 = res.data.json内的参数值"
   * 步骤5：然后子组件父组件进行参数传递，就在对应父组件中"：return的参数=return参数",最后在对应父组件内使用props接受数值,最后使用到对应对的div中
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
