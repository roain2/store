import httpinstance from "@/utils/http";
export const getorderapi = (id) => {
  return httpinstance({
    url: `/member/order/${id}`,
  });
};
