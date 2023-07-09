// import './assets/main.css'
// 引入初始化的scss文件
import '@/styles/common/common.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 全局指令注册
import { lazyPlugin } from '@/directives/scroll'
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(ElMessage)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')

