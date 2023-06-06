import httpinstance from "@/utils/http";
export function getcategoryapi(id) {
  return httpinstance({
    url: "/category",
    params: {
      id,
    },
  });
}
export function getCategoryFilterAPI(id) {
  return httpinstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
}
export const getSubCategoryAPI = (data) => {
  return httpinstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
