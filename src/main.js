// import './assets/main.css'
// 引入初始化的scss文件
import '@/styles/common/common.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
