import axios from "axios";
import store from "../store";
import router from "../router";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // nginx的接口,api指向后端
    baseURL: "http://localhost:80/api",
    timeout: 5000
  });
  axios.defaults.headers.post["Content-Type"] = "application/json";
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    config => {
      let token = store.state.user.token;
      if (token === "" || token === undefined || token === null) {
        return config;
      }
      config.headers["Authorization"] = token; // 让每个请求携带自定义token 请根据实际情况自行修改 token
      return config;
    },
    error => {
      // Do something with request error
      console.log("发送请求错误" + error); // for debug
      Promise.reject(error);
    }
  );

  // 2.2.响应拦截
  var bar = {};
  bar.text = "";
  instance.interceptors.response.use(
    response => {
      bar.color = "error";
      const data = response.data;
      bar.text = data.message;
      if (data.code !== 200) {
        store.commit("showSnackBar", bar);
        // 401:未登录;
        if (data.code === 401) {
          router.push({ path: "/login" });
          //location.reload(); // 为了重新实例化vue-router对象 避免bug
          //location.assign("http://localhost/login");
        }
        return Promise.reject(data.message);
      } else {
        return data.data;
      }
    },
    err => {
      bar.text = err;
      store.commit("showSnackBar", bar);
      console.log("响应拦截错误,请联系开发者" + err);
      router.push({ path: "/404" });
    }
  );

  // 3.发送真正的网络请求 本质上axios是返回一个promise
  return instance(config);
}
