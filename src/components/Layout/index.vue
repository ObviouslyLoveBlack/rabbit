<script setup>
import LayoutNav from './nav.vue'
import LayoutHeader from './header.vue'
import LayoutFooter from './footer.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>