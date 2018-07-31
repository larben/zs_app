import VueRouter from "vue-router"
import Wrap from '../modules/wrap.vue'
export function createRouter (){
  return new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/msg'
      },
      {
        path: '/',
        component: Wrap,
        children: (r => {
          let route = []
          r.keys().map(key => {
            r(key).default.map(key1 => route.push(key1))
          })
          return route
        })(require.context('../', true, /^\.\/modules\/((?!\/)[\s\S])+\/route\.js$/))
      }
    ]
  })
}
