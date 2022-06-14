import { request } from "@/plugins/request.js";
/**
 *
 * @param {*} data 用户输入数据
 * @returns promise
 */
export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/users/login",
    data,
  });
};

/**
 *
 * @param {*} data 用户输入数据
 * @returns promise
 */
export const register = (data) => {
  return request({
    method: "POST",
    url: "/api/users",
    data,
  });
};
