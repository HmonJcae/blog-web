import { request } from "../utils/request";

// 登录
export function login(userName, passWord) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      userName,
      passWord
    }
  });
}

// 注册
export function register(userName, passWord) {
  return request({
    url: "/user/register",
    method: "post",
    data: {
      userName,
      passWord
    }
  });
}
