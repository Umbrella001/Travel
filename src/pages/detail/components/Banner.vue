<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_350x240_f8a69516.jpg" alt="">
      <div class="banner-info" >
        <div class="banner-title">长隆野生动物世界(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6df;</span>29</div>
      </div>
    </div>
    <common-gallery
      :images="images"
      v-show="showGallery"
      @close="closeGallery"
    ></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'
    export default {
        name: "DetailBanner",
     data(){
          return{
            images:['http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg','http://img1.qunarzz.com/sight/p0/1605/47/47e676ee434a591490.img.jpg_r_800x800_fb15bd87.jpg'],
            showGallery:false
          }
     },
      methods:{
        handleBannerClick(){
          this.showGallery = true
        },
        closeGallery(){
          this.showGallery = false
        }
      },
      components:{
        CommonGallery
      }
    }
</script>

<style lang="stylus" scoped>
//解决网络加载慢时，开头页面跳动的格式：banner >> banner-img
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 68.57%
.banner-img
  width 100%
//主体上分布内容,使用flex弹性盒子,适配移动端PC端内容的变化
.banner-info
  display flex
  position absolute
  right 0
  bottom 0
  left 0
  line-height 30px
  color white
  background linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,8))
.banner-title
  flex 1
  font-size 16px
  padding-left 10px
.banner-number
  height 20px
  line-height 20px
  padding 0 20px
  border-radius 10px
  margin 5px 10px 0 0
  background rgba(0,0,0,.7)
.banner-icon
  font-size 14px
  padding-right 4px
</style>
