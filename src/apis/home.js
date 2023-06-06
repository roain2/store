import httpinstance from "@/utils/http";
export function getbannerapi(params = {}) {
  const { distributionSite = "1" } = params;
  return httpinstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

export function findNewAPI() {
  return httpinstance({
    url: "/home/new",
  });
}
export function gethotapi() {
  return httpinstance({
    url: "home/hot",
  });
}
export function getgoodsapi() {
  return httpinstance({
    url: "home/goods",
  });
}
