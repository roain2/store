import axios from "axios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import "element-plus/theme-chalk/el-message.css";
const httpinstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});
//axios请求拦截器
httpinstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    const token = userStore.userinfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
httpinstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    if (e.response.status == 401) {
      userStore.clearuserinfo();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);
export default httpinstance;
