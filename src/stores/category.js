import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategory} from '@/api/layout'



export const useCategoryStore = defineStore('category', () => {
 // 导航列表的数据管理
 const categoryList = ref([])
 const getCategoryList = async () =>{
   const res = await getCategory()
   categoryList.value = res.result
 } 
   return {
    categoryList,
    getCategoryList
   }
})
