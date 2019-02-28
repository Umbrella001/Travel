import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 问题：当用户开启关闭本地缓存时，或者隐身访问时候,localStorage函数（本地存储函数，类似于cookie）可能失效,导致整个页面报错的不能使用
// 思路：使用localStorage时应该定义抛出异常
// 当报错时异常先定义localStorage缓存避免上面问题的出现
let currentCity = '广州';
try {
  if(localStorage.cty){
    currentCity = localStorage.city
  }
}catch (e) {

}
//创建Vuex名为Store仓库
export default new Vuex.Store({
  //公用数据state
  state:{
    city: currentCity
  },
  //异步的方法写在action：组件中使用dispatch接收组件传递过来的数据,在使用commit传递给mutations处理,该步骤可以省略,直接在组件上将dispatch直接改为commit即可直接传递给mutations
  actions:{
    selectCity(ctx,city){
      ctx.commit('selectCity',city)
    }
  },
  //同步数据改变mutations：mutations接收数据state，city,然后把新city重新赋值给state公用数据完成数据同步
  mutations:{
    selectCity(state,city){
      state.city = city;
      try {
        localStorage.city = city
      }catch (e) {

      }
    }
  }
})
