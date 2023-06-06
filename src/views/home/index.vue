<script setup>
import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeNew from "@/views/home/components/HomeNew.vue";
import HomeHot from "@/views/home/components/HomeHot.vue";
import HomeProduct from "@/views/home/components/HomeProduct.vue";
import HomePanel from "@/views/home/components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="新鲜好物" subtitle="新鲜好物 好多商品">
    <div>我是新鲜好物的插槽内容</div>
  </HomePanel>
  <HomePanel title="人气推荐" subtitle="人气推荐 好多商品">
    <div>我是人气</div>
  </HomePanel>
</template>
