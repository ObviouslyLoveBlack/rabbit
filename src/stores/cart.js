import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

export const useCart = defineStore('cart',()=>{
    // 1.定义state
    const cartList = ref([])
    // 2.定义action
    const addCart = (options) =>{
     const target = cartList.value.find(i=>i.skuId == options.skuId)
     if(!target){
        cartList.value.push(options)
     } else {
        target.count +=options.count
     }
     totalCart()
    }
    const deteleCart = (skuId) =>{
      // splice删除
    //   const index = cartList.value.findIndex(v=>v.skuId == skuId)
    //   cartList.value.splice(index,1)
      cartList.value = cartList.value.filter(v=>v.skuId !== skuId) 
    }
    const clearCart = () =>{

    }
    // 总个数与总价格 写法一函数式
    const totalCart = () =>{
      let total = 0
      cartList.value.forEach((v)=> total += v.count)  
      return total
    }
    const PriceTotalCart = ()=>{
        return cartList.value.filter(v=>v.selected).reduce((pre,cur)=>{
            return pre + cur.count * cur.price
        },0)
    } 
    // 写法二 计算属性
    const allTotal = computed(()=>{
        return cartList.value.reduce((pre,cur)=>{
            return pre + cur.count
        },0)
    })   
    const allPrice = computed(()=>{
        return cartList.value.reduce((pre,cur)=>{
            return pre + cur.count * cur.price
        },0)
    })  
    return{
        cartList,
        addCart,
        deteleCart,
        clearCart,
        totalCart,
        PriceTotalCart,
        allTotal,
        allPrice
    }
})