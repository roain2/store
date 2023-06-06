import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";
import layout from "@/views/layout/index.vue";
import home from "@/views/home/index.vue";
import category from "@/views/category/index.vue";
import subcategory from "@/views/subcategory/index.vue";
import detail from "@/views/details/index.vue";
import cartlist from "@/views/cartlist/index.vue";
import checkout from "@/views/checkout/index.vue";
import pay from "@/views/pay/index.vue";
import payback from "@/views/pay/payback.vue";
import sku from "@/views/sku/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: home,
        },
        {
          path: "category/:id",
          component: category,
        },
        {
          path: "category/sub/:id",
          component: subcategory,
        },
        {
          path: "detail/:id",
          component: detail,
        },
        {
          path: "cartlist",
          component: cartlist,
        },
        {
          path: "checkout",
          component: checkout,
        },
        {
          path: "pay",
          component: pay,
        },
        {
          path: "paycallback",
          component: payback,
        },
        {
          path: "sku",
          component: sku,
        },
      ],
    },
    {
      path: "/login",
      component: login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
