import request from "@/utils/request";

export function loginByUser({account,password}){
    return request({
        url:'/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}