import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import { createRouter } from './router'
import { createStore } from './store'
import App from './app.vue'
Vue.use(VueRouter)
Vue.use(Vuex)

export function createApp (){
    const router = createRouter()
    const store = createStore()
    router.beforeEach((to, from, next) => {
        const list = store.state.historyRouterList // 将需要切换效果的路由名称组成一个数组
        const toName = to.name // 即将进入的路由名字
        const fromName = from.name // 即将离开的路由名字
        const toIndex = list.lastIndexOf(toName) // 进入下标
        const fromIndex = list.lastIndexOf(fromName) // 离开下标
        let direction = ''

        if ((toIndex !== -1) && (fromIndex === (toIndex + 1))) { // 如果在历史中有，且目标页面是当前页面的上一页
            direction = 'left'
            list.splice(toIndex + 1, list.length - (toIndex + 1))
            store.state.historyRouterList = list
        } else {
            // 如果进入的下标大于离开的下标，那么是右滑
            direction = 'right'
            store.state.historyRouterList.push(toName)
        }

        store.state.viewDirection = direction // 这里使用vuex进行赋值

        /* 路由发生变化修改页面title */
        if (to.meta.title) {
            document.title = to.meta.title
        }
        return next()
    })
    /* eslint-disable no-new */
    const app = new Vue({
        el: '#root',
        router,
        store,
        render: h => h(App)
    })
    return { app, store, router}
}


