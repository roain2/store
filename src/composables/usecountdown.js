import { ref, computed, onUnmounted } from "vue";
import dayjs from "dayjs";
export const useCountDown = () => {
  //响应式数据
  const time = ref(0);
  const timer = null;
  //格式化时间
  const formattime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  //开启倒计时的函数
  const start = (currenttime) => {
    console.log("12", currenttime);
    time.value = currenttime;
    setInterval(() => {
      time.value--;
    }, 1000);
  };
  onUnmounted(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
  return {
    formattime,
    start,
  };
};
