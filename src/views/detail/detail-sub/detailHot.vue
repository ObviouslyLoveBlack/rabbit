<template>
  <div class="goods-hot">
    <h3>{{title}}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import {getDetailHot} from '@/api/detail.js'
import { useRoute } from 'vue-router'
import { computed,onMounted, ref } from 'vue'
const props = defineProps({
    // 适配title一解  组件直接传值
    // title:{
    //   type:String,
    //   default:'24小时热榜'
    // },
    detailType:{
      type:Number,
      default:1
    }
})  
// 适配title的第二解
const titleMap = {
    1:'24小时热榜',
    2:'周热榜'
}
const title = computed(()=>titleMap[props.detailType])
// 适配title的第三解
// const thridMap = new Map([
//    [1,'24小时热榜'],
//    [2,'周热榜']
// ])
// const title = thridMap.get(props.detailType)
const route = useRoute()
const parmas = {
    id: route.params.id,
    type:props.detailType
}
const hotList = ref([])
const detailHot = async ()=>{
    const res = await getDetailHot(parmas)
    hotList.value = res.result
}
onMounted(()=>{
    detailHot()
})
</script>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>