           /*main.js项目入口文件：需要的插件，引用都从这边导入*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//reset样式表就是重置不同手机浏览器默认样式使其统一，手机端必备！
//border解决手机端多倍屏对1px物理像素边框的纠正
//fastClick解决移动端click事件延迟300ms的问题
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
/*导入fastClick插件后，使用该插件的attach添加到body层即可*/
fastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
