<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>text</div>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
    export default {
      components : {
        HomeHeader,
        HomeSwiper
      },
        name: "Home"
    }
</script>

<style scoped>

</style>
