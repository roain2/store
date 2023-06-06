<script setup>
import LayoutNav from "@/views/layout/components/layoutnav.vue";
import LayoutHeader from "@/views/layout/components/layoutheader.vue";
import LayoutFooter from "@/views/layout/components/layoutfooter.vue";
import LayoutFixed from "@/views/layout/components/layoutfixed.vue";
import { usecategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";
const categorystore = usecategoryStore();
onMounted(() => categorystore.getcategory());
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
