import httpinstance from "@/utils/http";
/* export function loginapi({ account, password }) {
  return httpinstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
} */
export const loginapi = ({ account, password }) => {
  return httpinstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
