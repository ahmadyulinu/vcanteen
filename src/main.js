// imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import AOS from 'aos'



// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'aos/dist/aos.css'

 

Vue.use(VueToast);
Vue.use(AOS);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  router,
  created() {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
