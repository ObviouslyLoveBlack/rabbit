<template>
  <StaticNav />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from './nav.vue'
import LayoutHeader from './header.vue'
import LayoutFooter from './footer.vue'
import StaticNav from './staticNav.vue'
import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue'
const categoryStroe =  useCategoryStore()
onMounted(()=>{
  categoryStroe.getCategoryList()
})
</script>
