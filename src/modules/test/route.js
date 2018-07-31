const Test = () => import(
  /* webpackChunkName: "Test" */
  /* webpackMode: "lazy" */
  './view/test.vue')
const routes = [
  {
    path: '/test',
    name: 'test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
]
export default routes
