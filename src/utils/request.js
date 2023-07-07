import axios from "axios";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'

const request = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:6000
})


//异常处理器
const errorHandler = (error) =>{
   // 1.判断异常情况做相应的操作
   ElMessage.warning(error.response.data.message)
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
},errorHandler)

request.interceptors.response.use((response)=>{
    return response.data
},errorHandler)

export default request