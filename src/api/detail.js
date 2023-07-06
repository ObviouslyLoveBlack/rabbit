import request from "@/utils/request";

export function getDetailById(id){
    return request({
        url:'/goods',
        params:{
            id
        }
    })
}