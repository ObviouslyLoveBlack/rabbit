import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import {useUserStore} from '@/stores/user'
import {addCartByApi,findCartList,deleteCartByApi} from '@/api/cart'

export const useCart = defineStore('cart',()=>{
    // 1.定义state
    const cartList = ref([])
    const useStore = useUserStore()
    const isLogin = computed(()=>useStore.userInfo.token)
    // 2.定义action
    const addCart = async (options) =>{
     if(isLogin.value){
        const {skuId,count} = options
        // 登录走接口添加购物车
        await addCartByApi({skuId,count})
        updateCart()
     } else{
        // 非登录走本地购物车
        const target = cartList.value.find(i=>i.skuId == options.skuId)
        if(!target){
           cartList.value.push(options)
        } else {
           target.count +=options.count
        }
     }
    
    }
    // 接口更新购物车列表
    const updateCart = async ()=>{
        const res = await findCartList()
        cartList.value = res.result
    }
    const deteleCart =async (skuId) =>{
        if(isLogin.value){
           await deleteCartByApi([skuId])
           updateCart()
        }
    // splice删除
    //   const index = cartList.value.findIndex(v=>v.skuId == skuId)
    //   cartList.value.splice(index,1)
      cartList.value = cartList.value.filter(v=>v.skuId !== skuId) 
    }
    // 清空购物车
    const clearCart = ()=>{
        cartList.value = []
    }
    // 控制全选按钮
    const allSelect = (selected) =>{
     cartList.value.forEach(v=>v.selected = selected)
    }
    // 更改单个按钮的选中状态
    const changeSelect = (selected,options) =>{
      const target = cartList.value.find(v=>v.skuId == options.skuId)
      target.selected = selected
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
    // 商品总个数(包括选中与非选中)
    const allTotal = computed(()=>{
        return cartList.value.reduce((pre,cur)=>{
            return pre + cur.count
        },0)
    })   
    // 选中商品的总个数
    const checkedTotal = computed(()=>{
        return cartList.value.filter(v=>v.selected).reduce((pre,cur)=>{
            return pre + cur.count
        },0)
    })
    const allPrice = computed(()=>{
        return cartList.value.reduce((pre,cur)=>{
            return pre + cur.count * cur.price
        },0)
    })  
    // 是否全选
    const allChecked = computed(()=>{
        return cartList.value.every(v=>v.selected)
    })
   
    return{
        cartList,
        addCart,
        deteleCart,
        clearCart,
        allSelect,
        changeSelect,
        updateCart,
        totalCart,
        PriceTotalCart,
        allTotal,
        allPrice,
        allChecked,
        checkedTotal
    }
},{
    persist:true
})