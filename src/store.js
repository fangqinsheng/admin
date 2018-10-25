import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    leftNavState: 'goods'
};
for(var item in state) {
    localStorage.getItem(item)? state[item] = JSON.parse(localStorage.getItem(item)): false;
}

export default new Vuex.Store({
    state
})
// export default new Vuex.Store({
//   state: {
//     // 存放状态
//     leftNavState: '商品'
//   },
//   mutations: {
//     //  更改state中状态的逻辑，同步操作
//
//   },
//   actions: {
//     // 提交mutation，异步操作
//   },
//   modules: {
//     //  如果store分成一个个的模块，需用到modules
//   }
// })
