import {getBreadcrumb} from '@/api/category'
import { useRoute,onBeforeRouteUpdate } from 'vue-router';
import { onMounted, ref } from 'vue'

export function useCategory(){
const breadcrumb = ref({})
const route = useRoute()
const getBreadcrumbList = async(id=route.params.id)=>{
    const res = await getBreadcrumb(id)
    breadcrumb.value = res.result
}
onBeforeRouteUpdate((to)=>{
    getBreadcrumbList(to.params.id)
  })
  onMounted(()=>{
   getBreadcrumbList()
  })
  return{
    breadcrumb
  }
}
// 分类组件被复用，仅参数变化时生命周期不再调用，既无法获取新数据
// 解决: 1.强制组件的销毁和重建 2.监听路由变化，调用新数据
// 1.给router-view添加key="$route.fullPath" 破坏复用机制,强制销毁重建
// 2.onBeforeRouteUpdate 监听路由变化