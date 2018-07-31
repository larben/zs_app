import {
  createApp
} from './app.js'

const {
  app,
  router,
  store
} = createApp()


// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount('#app')
})