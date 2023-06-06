import { defineStore } from "pinia";
import { ref } from "vue";
import { loginapi } from "@/apis/user";
import { usecartstore } from "./catestore";
import { mergecartapi } from "@/apis/cart";
export const useUserStore = defineStore(
  "user",
  () => {
    const cartstore = usecartstore();
    //定义管理用户数据的state
    const userinfo = ref({});
    //定义获取接口数据的action函数
    const getuserinfo = async ({ account, password }) => {
      const res = await loginapi({ account, password });
      userinfo.value = res.result;
      //合并购物车操作
      await mergecartapi(
        cartstore.cartlist.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartstore.updatenewlist();
    };
    function clearuserinfo() {
      userinfo.value = {};
      cartstore.clearcart();
      //执行清楚购物车的action
    }
    return {
      userinfo,
      getuserinfo,
      clearuserinfo,
    };
  },
  {
    persist: true,
  }
);
