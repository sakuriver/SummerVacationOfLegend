
// onsen ui のインポート処理
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import Router from 'vue-router'
import Title from '@/components/Title'
import Main from '@/components/Main'

Vue.use(Router)
Vue.use(VueOnsen)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
