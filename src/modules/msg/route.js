const Msg = () => import(
  /* webpackChunkName: "Msg" */
  /* webpackMode: "lazy" */
  './view/msg.vue')
const MsgTest = () => import(
  /* webpackChunkName: "Msg" */
  /* webpackMode: "lazy" */
  './view/msgTest.vue')
const routes = [
  {
    path: '/msg',
    name: 'msg',
    component: Msg,
    meta: {
      title: '消息中心'
    }
  },
  {
    path: '/msgTest',
    name: 'msgTest',
    component: MsgTest,
    meta: {
      title: '消息中心测试'
    }
  }]
export default routes
