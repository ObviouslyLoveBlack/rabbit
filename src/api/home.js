import request from "@/utils/request";

export function getMenuInfo(){
    return request({
        url:'/home/category/head'
    })
}

export function getBannerList(distributionSite='1'){
    return request({
        url:'/home/banner',
        params:{
            distributionSite,
        }
    })
}

export function getNewInfo(){
    return request({
        url:'/home/new'
    })
}

export function getHotInfo(){
    return request({
        url:'/home/hot'
    })
}

export function getProduct(){
    return request({
        url:'/home/goods'
    })
}