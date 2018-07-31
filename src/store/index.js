
import Vuex from 'vuex'
import {UPDATE_LOADING, ALERT} from './mutaitons-type.js'

export function createStore() {
  return new Vuex.Store({
    state: {
      UPDATE_LOADING: false,
      historyRouterList: [], // 存放历史路由组件名
      viewDirection: 'fade'
    },
    getters: {
      getUptateLoadingFlag: state => state.UPDATE_LOADING
    },
    actions: {

    },
    mutations: {
      [UPDATE_LOADING](state, loadingFlag) {
        state.UPDATE_LOADING = loadingFlag
      },
      [ALERT](state, options) {
        state.ALERT = options
      }
    }
  })
}
