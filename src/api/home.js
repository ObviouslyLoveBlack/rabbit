import request from "@/utils/request";

export function getMenuInfo(){
    return request({
        url:'/home/category/head'
    })
}

export function getBannerList(){
    return request({
        url:'/home/banner'
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