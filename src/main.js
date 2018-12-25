import Vue from 'vue'
import App from './App'
import axios from "axios"

// 全局axios
Vue.prototype.$axios = axios;
// 使用axios的方式设置基础地址
axios.defaults.baseURL = "https://autumnfish.cn/wx/";

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
