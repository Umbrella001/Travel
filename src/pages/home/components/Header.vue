<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont return">&#xe617;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60b;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
    <span class="iconfont drop-down">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default  {
    name: "Header"
  }
</script>

<style lang="stylus" scoped>
  /*
   * 内容：引用一个全局变量，该变量在sty中定义，在需要的地方直接引用$名字
   * 好处：大大提高代码复用性和维护性
   * 注意点1：样式中导入样式需要在import前要加“@”
   * 注意点2：同上，在用到别名前需要加“~”
   * 警告点1：使用上面无误时，仍会报错，原因是修改了webpack.base文件后需要重启      服务端（npm run dev），即可解决该警告
   */
  @import "~styles/variable.styl"
  /*
   * 转换：1 rem = html font-size = 50px
   * 原因：在reset.css中定义了HTML初始样式font-size为50px,在结合是NX图进行计算
   * 计算：假设在2x图给的header高度我86px，则实际设计是43px/0.86rem
   */
  .header
    display: flex
    color:#fff
    background : $bgColor
    line-height: .86rem
  .header-left
    float: left
    width: .64rem
  .return
    font-size :.4rem
    margin-left :.04rem
    text-align center
  .header-right
    float:right
    width: 1.24 rem
    text-align:center
   .drop-down
     font-size : .12rem
     margin-right .04rem
  .header-input
    flex:1
    color #ccc
    background : #fff
    height: .64rem
    line-height : .64 rem
    padding-left .2rem
    margin-top: .12 rem
    margin-left: .2rem
    border-radius: .1rem
    box-shadow : inset 0 0 2px 0 rgba(0,0,0,.7)
</style>
