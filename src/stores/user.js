// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginByUser } from '@/api/use'
import { mergeCartApi } from '@/api/cart'
import {useCart} from '@/stores/cart'
import router from '@/router'
export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  const cart = useCart()
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginByUser({ account, password })
    userInfo.value = res.result
    // 合并购物车
    console.log(1);
    await mergeCartApi(cart.cartList.map((v)=>{
       return{
        skuId:v.skuId,
        selected:v.selected,
        count:v.count
       }
    }))
    cart.updateCart()
  }
  const Logout = ()=>{
    userInfo.value = {}
    router.push('/login')
    cart.clearCart()
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    Logout
  }
},{
  persist: true,
})
