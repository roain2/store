import { ref } from "vue";
import { defineStore } from "pinia";
import { getcategoryapi } from "@/apis/layout.js";
export const usecategoryStore = defineStore("category", () => {
  const categorylist = ref([]);
  const getcategory = async () => {
    const res = await getcategoryapi();
    console.log("1", res);
    categorylist.value = res.result;
  };
  return {
    categorylist,
    getcategory,
  };
});
