<template>
  <div class="home-banner">
    <el-carousel height="500px" trigger="click">
      <el-carousel-item v-for="item in bannerList" :key="item.d">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import {getBannerList} from '@/api/home'
import { onMounted, ref } from 'vue'
const bannerList = ref([])
const getBanner = async ()=>{
    const res =await getBannerList()
    bannerList.value = res.result
}
onMounted(()=>{
getBanner()
})
</script>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>