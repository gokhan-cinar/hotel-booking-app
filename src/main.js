import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import { i18n } from "./plugins/i18n";
import { main } from './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  i18n,
  router,
  store,
  main,
  render: h => h(App)
}).$mount('#app')
