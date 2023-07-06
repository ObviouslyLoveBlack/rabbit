import request from "@/utils/request";

//一级分类＋面包屑导航
export function getBreadcrumb(id){
    return request({
        url:'/category',
        params:{
            id
        },
    })
}

// 二级分类面包屑导航
export function getCategorySub(id){
    return request({
        url:'/category/sub/filter',
        params:{
            id
        },
    })
}

// 二级分类商品数据
export function getSubGoods(params){
    return request({
        url:'/category/goods/temporary',
        method:'post',
        data:params,
    })
}
