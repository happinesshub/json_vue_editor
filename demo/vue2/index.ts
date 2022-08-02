import Vue from 'vue'
import App from './index.vue'

import VCA from '@vue/composition-api'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// Vue.use(VCA)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
