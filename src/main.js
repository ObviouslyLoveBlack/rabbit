// import './assets/main.css'
// 引入初始化的scss文件
import '@/styles/common/common.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 全局指令注册
import { lazyPlugin } from '@/directives/scroll'
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')
//定义全局指令
// app.directive('img-lazy',{
//     mounted(el,binding){
//         // el: 指令绑定的那个元素
//         // bingding: 指令绑定的值
//         console.log(el,binding);
//     }
// })

