import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui';
import '../public/css/reset.css'
import 'mint-ui/lib/style.css'
import '../public/iconfont/iconfont.css'
import '../public/iconfont/iconfont.js'

Vue.use(Mint);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
