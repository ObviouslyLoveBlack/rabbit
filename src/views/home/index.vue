<script setup>
import HomeCategory from './home-sub/category.vue'
import HomeBanner from './home-sub/banner.vue'
import HomeNew from './home-sub/new.vue'
import HomeHot from './home-sub/hot.vue'
import homeProduct from './home-sub/product.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>