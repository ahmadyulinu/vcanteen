// imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import AOS from 'aos'
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./authen";




// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'aos/dist/aos.css'

 
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

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
