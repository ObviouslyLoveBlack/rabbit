import axios from "axios";

const request = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:6000
})

//异常处理器
const errorHandler = (error) =>{
   // 1.判断异常情况做相应的操作

   // 2.返回结果
   return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config=>{
    // 1.做一些操作，如携带token
    // 2. 返回信息
    return config
},errorHandler)

request.interceptors.response.use((response)=>{
    // 1.做一些状态码的验证
    // 2.请求头
    // 3.返回
    return response.data
},errorHandler)
export default request