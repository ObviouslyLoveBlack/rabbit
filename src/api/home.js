import request from "@/utils/request";

export function getMenuInfo(){
    return request({
        url:'/home/category/head'
    })
}