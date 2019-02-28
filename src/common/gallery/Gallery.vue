<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of images" :key="index">
          <img class="wrapper-image" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  //"画廊"功能实现
    export default {
      name: "CommonGallery",
      props: {
        images: {
          type: Array,
          default() {
            return []
          }
        }
      },
      data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observer:true,
            observeParents: true

          }
        }
      },
      methods:{
        handleGalleryClick(){
          this.$emit('close')
        }
      }
    }
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  z-index 99
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background #000
.wrapper
  height 0
  width 100%
  padding-bottom 100%
.wrapper-image
  width 100%
.swiper-pagination
  bottom -100px
  color white
</style>
