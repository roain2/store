import httpinstance from "@/utils/http";
export function getcategoryapi() {
  return httpinstance({
    url: "/home/category/head",
  });
}
