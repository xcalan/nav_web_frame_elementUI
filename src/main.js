import Vue from 'vue'
import App from './App.vue'

// 导入路由配置文件
import router from './router'

// 导入所有依赖
import './plugins'

import './assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
