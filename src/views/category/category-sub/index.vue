<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categorySub.parentId}` }">{{categorySub.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{categorySub.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="params.sortField" @tab-change="handleChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <goodItem v-for="good in goodsList" :key="good.id" :goods="good"></goodItem>
      </div>
    </div>
  </div>

</template>

<script setup>
import goodItem from '@/views/home/home-sub/goodItem.vue'
import {getCategorySub,getSubGoods} from '@/api/category'
import { ref } from 'vue'
import {useRoute} from 'vue-router'
const route = useRoute()
const categorySub = ref({})
const goodsList= ref([])
const disabled = ref(false)
const params = ref({
   categoryId: route.params.id ,
   page: 1,
   pageSize: 20,
   sortField: 'publishTime'
})
const getCategoryFilter = async()=>{
  const res = await getCategorySub(route.params.id)
  categorySub.value = res.result
}
const getGoodsList = async()=>{
  const res = await getSubGoods(params.value)
  goodsList.value = res.result.items
}
const handleChange = ()=>{
  params.value.page = 1
  getGoodsList()
}
// 加载更多的方法
const load = async ()=>{
  // 获取下一页的数据
  params.value.page ++
  const res = await getSubGoods(params.value)
  goodsList.value = [...goodsList.value , ...res.result.items]
   // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}
getCategoryFilter()
getGoodsList()

</script>


<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>