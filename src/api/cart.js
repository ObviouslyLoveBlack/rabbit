import request from "@/utils/request";

// 接口加入购物车
export function addCartByApi({skuId,count}){
    return request({
        url:'/member/cart',
        method:'post',
        data:{
            skuId,
            count
        },
    })
}
// 接口获取购物车列表
export function findCartList(){
    return request({
        url:'/member/cart',
    })
}
// 接口删除购物车
export function deleteCartByApi(ids){
    return request({
        url:'/member/cart',
        method:'delete',
        data:{
            ids
        }
    })
}
// 合并本地与服务端的购物车
export function mergeCartApi(data){
    return request({
        url:'/member/cart/merge',
        method:'post',
        data
    })
}