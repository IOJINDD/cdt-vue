import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({

  // 全局数据源
  state: {

  },

  // 获取state里的值
  getters: {

  },

  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {

  },

  //Action 提交的是 mutation，而不是直接变更状态。
  //可以包含任意异步操作。
  actions: {

  },

  // 将其他模块引入
  modules: {

  }
})

export default store