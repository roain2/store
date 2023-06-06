import { getcategoryapi } from "@/apis/category";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
export function usecategory() {
  const categorydata = ref({});
  const route = useRoute();
  const getcategory = async () => {
    const res = await getcategoryapi(route.params.id);
    categorydata.value = res.result;
  };
  watch(getcategory, () => {
    getcategory();
  });
  return {
    categorydata,
  };
}
