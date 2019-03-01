<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
      <common-gallery
        :images="bannerImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from 'common/gallery/Gallery'
  export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data () {
      return {
        showGallery: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallery = true
      },
      handleGalleryClose () {
        this.showGallery = false
      }
    },
    components: {
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
