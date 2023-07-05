<script setup>
import LayoutNav from './nav.vue'
import LayoutHeader from './header.vue'
import LayoutFooter from './footer.vue'
import StaticNav from './staticNav.vue'
</script>

<template>
  <StaticNav />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>