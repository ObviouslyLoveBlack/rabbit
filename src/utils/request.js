import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
// import { useRouter } from 'vue-router'
// import router from '@/router'
const request = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:6000
})


//异常处理器
const errorHandler = (error) =>{
   const useStore = useUserStore()
   // 问题: 无法使用引入的userRouter跳转，得使用路由创建文件中的router
//    const router = useRouter()
   ElMessage.warning(error.response.data.message)
   // 1.判断异常情况做相应的操作
   if(error.response.status === 401){
    useStore.Logout()
    // router.push({path:'/login'})
   }
   // 2.返回结果
   return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config=>{
    // 1.做一些操作，如携带token
const userStore = useUserStore()
const token = userStore.userInfo.token
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    // 2. 返回信息
    return config
}, errorHandler)

request.interceptors.response.use((response)=>{
    return response.data
},errorHandler)

export default request