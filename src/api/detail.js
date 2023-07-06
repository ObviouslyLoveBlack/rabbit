import request from "@/utils/request";

export function getDetailById(id){
    return request({
        url:'/goods',
        params:{
            id
        }
    })
}

export function getDetailHot(params){
    return request({
        url:'/goods/hot',
        params:{
            id:params.id,
            type:params.type,
            limit:3
        }
    })
}