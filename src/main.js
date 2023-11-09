import Vue from 'vue'


import App from './App.vue'
import router from './router'
import axios from "axios";
import store from "./store";
import Vuex from "vuex";

axios.defaults.baseURL = "http://localhost:8082"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
