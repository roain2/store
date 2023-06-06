<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from "../home/components/GoodsItem.vue";
const categorydata = ref({});
const route = useRoute();
const getcategorydata = async () => {
  const res = await getCategoryFilterAPI(route.params.id);
  categorydata.value = res.result;
};
onMounted(() => getcategorydata());
const goodlist = ref([]);
const reqdata = ref({
  categoryId: 1005000,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const getgoodlist = async () => {
  const res = await getSubCategoryAPI(reqdata.value);
  goodlist.value = res.result.items;
};
onMounted(() => getgoodlist());
const tabchange = () => {
  console.log("tab切换了", reqdata.value.sortField);
  reqdata.value.page = 1;
  getgoodlist();
};
const disabled = ref(false);
const load = async () => {
  console.log("加载更多数据");
  reqdata.value.page++;
  const res = await getSubCategoryAPI(reqdata.value);
  goodlist.value = [...goodlist.value, ...res.result.items];
  if (res.result.items.length == 0) {
    disabled.value = true;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categorydata.parentId}` }"
          >{{ categorydata.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categorydata.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqdata.sortField" @tab-change="tabchange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodlist" :good="good" :key="good.id" />
      </div>
    </div>
  </div>
</template>

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
