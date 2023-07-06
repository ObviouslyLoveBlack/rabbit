import { onMounted, ref } from 'vue'
import {getBannerList} from '@/api/home'

export function useBanner(){
    const bannerList = ref([])
    const getBanner = async ()=>{
        const res =await getBannerList(2)
        bannerList.value = res.result
    }
    onMounted(()=>{
        getBanner()
    })
    return{
        bannerList
    }
}