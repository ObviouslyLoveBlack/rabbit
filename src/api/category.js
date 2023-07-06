import request from "@/utils/request";

export function getBreadcrumb(id){
    return request({
        url:'/category',
        params:{
            id
        },
    })
}