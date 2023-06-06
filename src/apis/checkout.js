import httpinstance from "@/utils/http";
export const getcheckinfoapi = () => {
  return httpinstance({
    url: "/member/order/pre",
  });
};
export const createorderapi = (data) => {
  return httpinstance({
    url: "/member/order",
    method: "POST",
    data,
  });
};
