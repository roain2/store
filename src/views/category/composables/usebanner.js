import { ref, onMounted } from "vue";
import { getbannerapi } from "@/apis/home";
export function usebanner() {
  const bannerlist = ref([]);
  const getbanner = async () => {
    const res = await getbannerapi({
      distributionSite: "2",
    });
    console.log(res);
    bannerlist.value = res.result;
  };
  onMounted(() => getbanner());
  return {
    bannerlist,
  };
}
