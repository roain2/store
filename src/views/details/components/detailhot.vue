<script setup>
import { gethotgoodsapi } from "@/apis/details";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  hottype: {
    type: Number,
  },
});
const typemap = {
  1: "24小时热榜",
  2: "周热榜",
};
const title = computed(() => typemap[props.hottype]);
const hotlist = ref([]);
const route = useRoute();
const gethotlist = async () => {
  const res = await gethotgoodsapi({
    id: route.params.id,
    type: props.hottype,
  });
  hotlist.value = res.result;
};
onMounted(() => gethotlist());
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in hotlist"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

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
