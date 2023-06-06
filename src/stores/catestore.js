import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { insertcartapi, findnewcartlistapi, delcartapi } from "@/apis/cart";
export const usecartstore = defineStore(
  "cart",
  () => {
    const usersotre = useUserStore();
    const islogin = computed(() => usersotre.userinfo.token);
    const cartlist = ref([]);
    //获取最新购物车列表action
    const updatenewlist = async () => {
      const res = await findnewcartlistapi();
      cartlist.value = res.result;
    };
    const addcart = async (goods) => {
      const { skuId, count } = goods;
      if (islogin.value) {
        //登录之后加入购物车逻辑
        await insertcartapi({ skuId, count });
        const res = await findnewcartlistapi();
        cartlist.value = res.result;
      } else {
        const item = cartlist.value.find((item) => goods.skuId == item.skuId);
        if (item) {
          item.count++;
        } else {
          cartlist.value.push(goods);
        }
      }
    };
    //删除购物车
    const delcart = async (skuId) => {
      if (islogin.value) {
        await delcartapi([skuId]);
        const res = await findnewcartlistapi();
        cartlist.value = res.result;
      } else {
        const ids = cartlist.value.findIndex((item) => skuId == item.skuId);
        cartlist.value.splice(ids, 1);
      }
    };
    //清除购物车
    const clearcart = () => {
      cartlist.value = [];
    };
    const allcount = computed(() =>
      cartlist.value.reduce((a, c) => a + c.count, 0)
    );
    const allprice = computed(() =>
      cartlist.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    //单选功能
    const singlecheck = (skuId, selected) => {
      const item = cartlist.value.find((item) => item.skuId == skuId);
      item.selected = selected;
    };
    //是否全选
    const isall = computed(() => cartlist.value.every((item) => item.selected));
    //全选功能
    const allcheck = (selected) => {
      cartlist.value.forEach((item) => (item.selected = selected));
    };
    const selectedcount = computed(() =>
      cartlist.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    const selectedprice = computed(() =>
      cartlist.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );
    return {
      cartlist,
      addcart,
      delcart,
      allcount,
      allprice,
      singlecheck,
      isall,
      allcheck,
      selectedcount,
      selectedprice,
      clearcart,
      updatenewlist,
    };
  },
  {
    persist: true,
  }
);
