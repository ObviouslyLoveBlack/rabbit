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